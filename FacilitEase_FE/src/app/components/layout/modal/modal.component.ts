import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '@app/features/service/dataService/modal.service';
import { AgentService } from '@app/features/service/httpService/agent.service';
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
    private modalService: ModalService
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
          } else if (currentRoute.includes('l3/view-ticket-in-detail')) {
            targetRoute = 'l3/view-ticket';
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

  forwardToDept(id: number) {
    this.showDropdown = false;
    console.log('Form Value:', this.deptForm.value);

    const isConfirmed = window.confirm(
      'Are you sure you want to forward to the department?'
    );

    if (isConfirmed && this.deptForm && this.deptForm.valid) {
      this.CategoryId = this.deptForm.get('category')?.value;
      this.agentService.forwardTicketDepartment(id, this.CategoryId).subscribe(
        (response) => {
          console.log('API call success:', response);
          this.toastr.success('Forwarded to department!', 'Success');
          this.modalService.closeModal();
          this.router.navigate(['/view-ticket']);
        },
        (error) => {
          console.error('API call error:', error);
          this.toastr.error('Failed to forward to department!', 'Error');
        }
      );
    } else {
      // User cancelled the action
      console.log('Forward to department action cancelled.');
    }
  }
}
