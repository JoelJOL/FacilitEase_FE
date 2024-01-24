import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalRef: BsModalRef | null = null;

  constructor(private modalService: BsModalService) {}

  openModal(): void {
    this.modalRef = this.modalService.show(ModalComponent, {
      class: 'modal-dialog-centered',
    });
  }

  closeModal(): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
  
  
  
}
