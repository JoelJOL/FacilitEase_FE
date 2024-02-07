import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SupportComponent } from '@app/components/layout/support/support.component';
import { ModalService } from '@app/features/service/dataService/modalService/modal.service';
interface Field {
  logo: string;
  title: string;
}
@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.css'],
})
export class SidebarFooterComponent {
  @Input() collapsed: boolean = false; // Assuming 'collapsed' is an input property
  @ViewChild(SupportComponent)
  modal!: SupportComponent; // Assuming ModalComponent is correctly imported

  constructor(private router: Router, private modalService: ModalService) {}
  myTeam: Field = { logo: 'assets/sidebar-myTeam.png', title: 'My Team' };
  support: Field = { logo: 'assets/sidebar-support.png', title: 'Support' };
  @Output() fieldClicked = new EventEmitter<any>();

  onFieldClicked() {
    this.modalService.openSupportModal();
  }
  onTeamClicked(clickedField: any) {
    this.fieldClicked.emit(clickedField);
  }
  showModal: boolean = false;

  closeModal() {
    this.showModal = false;
    this.modalService.closeSupportModal();
  }
}
