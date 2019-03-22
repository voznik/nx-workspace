// tslint:disable:no-console
// https://medium.com/@Dor3nz/compiling-css-in-new-angular-6-libraries-26f80274d8e5
import { relative } from 'path';
import { Bundler } from 'scss-bundle';
import { writeFile, readFile } from 'fs-extra';
import { resolve, parse } from 'path';

/** Bundles all SCSS files into a single file */
async function bundleScss() {
  const src = resolve('./libs/ui/src/lib/_theme.scss');
  const { found, bundledContent, imports } = await new Bundler()
    .Bundle(src, ['./libs/ui/src/**/*.scss']);
    // .Bundle('./src/lib/_theme.scss', ['./src/**/*.scss']);

  if (imports) {
    const cwd = process.cwd();

    const filesNotFound = imports
      .filter(x => !x.found)
      .map(x => relative(cwd, x.filePath));

    if (filesNotFound.length) {
      console.error(`scss-bundle: SCSS imports failed \n\n${filesNotFound.join('\n - ')}\n`);
      throw new Error('One or more SCSS imports failed');
    }
  }

  if (found) {
    await writeFile('./dist/libs/ui/_theme.scss', bundledContent);
    console.info('scss-bundle: bundled content successfuly');
  }
}

bundleScss();
