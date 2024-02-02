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
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent {
  @ViewChild('modalBody') modalBody!: ElementRef;

  supportForm: FormGroup;
  submitClicked: boolean = false; // New variable to track button click

  constructor(
    private formBuilder: FormBuilder,
    public modalRef: BsModalRef,
    private agentService: AgentService,
    private toastr: ToastrService
  ) {
    this.supportForm = this.formBuilder.group({
      supportDetails: ['', Validators.required],
      // Add more form controls and validations as needed
    });
  }

  close() {
    this.modalRef.hide();
  }
  onSubmit() {
    this.submitClicked = true;

    if (this.supportForm.valid) {
      const supportDetails = this.supportForm.get('supportDetails')!.value;

      // Call the API to get the user's email address
      this.agentService.getUserEmailAddress().subscribe(
        (response) => {
          const userEmail = response.email;

          // Call the API to send the email with the retrieved email address
          this.agentService
            .sendEmailToSupport(userEmail, supportDetails)
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
