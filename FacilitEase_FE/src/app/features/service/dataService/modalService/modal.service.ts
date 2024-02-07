import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SupportComponent } from '@app/components/layout/support/support.component';
import { AgentService } from '../../httpService/agentSerivce/agent.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: BsModalRef | null = null;
  ticketId: number = 0;
  managerId: number = 0;

  constructor(
    private modalService: BsModalService,
    private agentService: AgentService
  ) {}

  openModal(): void {
    this.modalRef = this.modalService.show(ModalComponent, {
      class: 'modal-dialog-centered',
    });
  }
  openSupportModal(): void {
    this.modalRef = this.modalService.show(SupportComponent, {
      class: 'modal-dialog-centered',
    });
  }
  closeModal(): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
  closeSupportModal(): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
  // forwardToManager() {

  //   this.agentService.forwardTicketManager(this.ticketId,this.managerId).subscribe(
  //     (response) => {
  //       console.log('API call success:', response);
  //     },
  //     (error) => {

  //       console.error('API call error:', error);
  //     }
  //   );
  // }
}
