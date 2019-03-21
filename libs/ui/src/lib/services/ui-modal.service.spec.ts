import { TestBed } from '@angular/core/testing';

import { UiModalService } from './ui-modal.service';

describe('UiModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiModalService = TestBed.get(UiModalService);
    expect(service).toBeTruthy();
  });
});
