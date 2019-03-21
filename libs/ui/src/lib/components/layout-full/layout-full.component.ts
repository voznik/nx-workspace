import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nxi-layout-full',
  templateUrl: './layout-full.component.html',
  styleUrls: ['./layout-full.component.scss']
})
export class LayoutFullComponent implements OnInit {
  routes: any[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.routes = this.router.config.filter(r => (r.path.length > 2 && !!r.component)).map(r => ({title: r.data ? r.data.title : r.path, link: r.path}));
    console.log('routes', this.routes);

    this.activatedRoute.data.subscribe(routeData => {
      if (routeData) {
        console.log({routeData})
      }
    });
  }

  ngOnInit() {
  }

}
