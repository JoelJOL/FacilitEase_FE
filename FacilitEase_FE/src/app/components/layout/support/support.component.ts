import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from '@app/features/service/httpService/agentSerivce/agent.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent {
  @ViewChild('modalBody') modalBody!: ElementRef;
  supportForm: FormGroup;// Form group for support details
  submitClicked: boolean = false; // New variable to track button click

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef,
    private agentService: AgentService,
    private toastr: ToastrService
  ) {
    // Initialize the support form with form controls and validators
    this.supportForm = this.formBuilder.group({
      supportDetails: ['', Validators.required],
    });
  }

  // Method to close the modal
  close() {
    this.modalRef.hide();
  }

  // Method to handle form submission
  onSubmit() {
    this.submitClicked = true;

    if (this.supportForm.valid) {
      const supportDetails = this.supportForm.get('supportDetails')!.value;

      // Call the API to get the user's email address
      this.agentService.getUserEmailAddress().subscribe(
        (response) => {
          const userEmail = response.email;
          const userName = response.userName;
          console.log(userEmail);

          // Call the API to send the email with the retrieved email address
          this.agentService
            .sendEmailToSupport(userEmail, userName, supportDetails)
            .subscribe(
              (result) => {
                this.toastr.success('Email sent successfully!', 'Success');
                this.modalRef.hide();
              },
              (error) => {
                console.error('Error sending email:', error);
              }
            );
        },
        (error) => {
          console.error('Error getting user email:', error);
        }
      );
    } else {
      this.supportForm.markAllAsTouched();
    }
  }
}
