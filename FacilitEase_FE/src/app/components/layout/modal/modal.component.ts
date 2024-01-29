import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '@app/features/service/httpService/agent.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  myForm!: FormGroup; 
  @Input() ticketDetails: any;
  @ViewChild('modalBody') modalBody!: ElementRef ;
  showDropdown: boolean = false;
  departments: any[] = [];
  constructor(public modalRef: BsModalRef,private agentService:AgentService, private fb: FormBuilder) {}

  ngOnInit(){

    if (this.ticketDetails) {
      const id = this.ticketDetails.id;
      const managerId = this.ticketDetails.managerId;
  
      console.log('Ticket ID:', id);
      console.log('Manager ID:', managerId);
  
    }
    
  this.agentService.getDepartments().subscribe((data) => {
    this.departments = data;
    console.log(data); 
  });

  this.modalBody.nativeElement.addEventListener('show.bs.modal', () => {
    this.showDropdown = true;
   
  });

  this.modalBody.nativeElement.addEventListener('hide.bs.modal', () => {
    this.showDropdown = false;
  });

  

  this.myForm = this.fb.group({
    department: ['', Validators.required],
 
  });
}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  close() {
    this.modalRef.hide();
  }

  forwardToManager(id: number, managerId: number) {
    this.showDropdown = false;
    this.agentService.forwardTicketManager(id, managerId).subscribe(
      (response) => {

        console.log('API call success:', response);
        alert("Forwarded to manager !")
      },
      (error) => {
        console.error('API call error:', error);
      }
    );
  
  }

  

}
