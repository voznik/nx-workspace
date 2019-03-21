import { Injectable, TemplateRef } from '@angular/core';
import { ModalService, ModalOptions } from '@healthcatalyst/cashmere';

@Injectable()
export class UiModalService {
  constructor(private modalService: ModalService) {}

  openTemplate(content: TemplateRef<any>, data: any, options?: ModalOptions) {
    const modalOptions: ModalOptions = {
      ...options,
      data
    };
    this.modalService.open(content, modalOptions);
  }
}
