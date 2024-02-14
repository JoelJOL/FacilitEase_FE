import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modalService/modal.service';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() ticketDetails: any;
  @ViewChild('modalBody') modalBody!: ElementRef;
  showDropdown: boolean = false;
  departments: any[] = [];
  deptForm!: FormGroup;
  DepartmentId: number = 0;
  CategoryId: number = 0;
  categories: any[] = [];

  constructor(
    public modalRef: BsModalRef,
    private agentService: AgentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.deptForm = this.formBuilder.group({
      category: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    if (this.ticketDetails) {
      const id = this.ticketDetails.id;
      const managerId = this.ticketDetails.managerId;
      const employeeId = this.ticketDetails.employeeId

      console.log('Ticket ID:', id);
      console.log('Manager ID:', managerId);
      console.log('Manager ID:', employeeId);
    }

    this.agentService.getDepartments().subscribe((data) => {
      this.departments = data;
      console.log(data);
    });


    const departmentControl = this.deptForm.get('department');
    console.log(departmentControl);
    if (departmentControl) {
      departmentControl.valueChanges.subscribe((deptId) => {
        console.log('Department value changed:', deptId);
        if (deptId) {
          this.agentService
            .getCategorybyDept(deptId)
            .subscribe((categories) => {
              this.categories = categories;
              console.log('Categories:', this.categories);
            });
        }
      });
    }
  }

  onDepartmentChange() {
    // Reset categories when department changes
    this.categories = [];
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  close() {
    this.modalRef.hide();
  }

  forwardToManager(id: number, managerId: number) {
    
    this.showDropdown = false;

    const isConfirmed = window.confirm(
      'Are you sure you want to forward to the manager?'
    );

    if (isConfirmed) {
      this.agentService.forwardTicketManager(id, managerId).subscribe(
        (response) => {
          console.log('API call success:', response);
          this.toastr.success('Forwarded to manager!', 'Success');
          // this.router.navigate(['/view-ticket']);
          const currentRoute = this.router.url;
          let targetRoute: string;

          if (currentRoute.includes('l2/details-escalated')) {
            targetRoute = 'l2/escalated-tickets';
          } else if (currentRoute.includes('l3admin/view-ticket-in-detail')) {
            targetRoute = 'l3admin/view-ticket';
          } else if (
            currentRoute.includes('l2admin/details-tickets-to-resolve')
          ) {
            targetRoute = 'l2admin/tickets-to-resolve';
          } else {
            targetRoute = '**';
          }

          this.router.navigate([targetRoute]);
          this.close();
        },
        (error) => {
          console.error('API call error:', error);
          this.toastr.error('Failed to forward to manager!', 'Error');
          this.close();
        }
      );
    } else {
      // User cancelled the action
      console.log('Forward to manager action cancelled.');
    }
  }

  forwardToDeptHead(id:number,employeeId:number){
    this.showDropdown = false;

    const isConfirmed = window.confirm(
      'Are you sure you want to forward to the department head?'
    );

    if (isConfirmed) {
      this.agentService.forwardTicketDeptHead(id, employeeId).subscribe(
        (response) => {
          console.log('API call success:', response);
          this.toastr.success('Forwarded to department head!', 'Success');
          // this.router.navigate(['/view-ticket']);
          const currentRoute = this.router.url;
          let targetRoute: string;

          if (currentRoute.includes('l2/details-escalated')) {
            targetRoute = 'l2/escalated-tickets';
          } else if (currentRoute.includes('l3admin/view-ticket-in-detail')) {
            targetRoute = 'l3admin/view-ticket';
          } else if (
            currentRoute.includes('l2admin/details-tickets-to-resolve')
          ) {
            targetRoute = 'l2admin/tickets-to-resolve';
          } else {
            targetRoute = '**';
          }

          this.router.navigate([targetRoute]);
          this.close();
        },
        (error) => {
          console.error('API call error:', error);
          this.toastr.error('Failed to forward to department head!', 'Error');
          this.close();
        }
      );
    } else {
      // User cancelled the action
      console.log('Forward to department head action cancelled.');
    }
  }
}
