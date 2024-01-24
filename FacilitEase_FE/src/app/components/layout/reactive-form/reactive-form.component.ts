// reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ManagerService } from '@app/features/service/httpService/manager.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  showReview: boolean = false;
  myForm!: FormGroup;
  employeecode = new FormControl('', Validators.required);
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  dob = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  gender = new FormControl('', Validators.required);
  managerId = new FormControl('', Validators.required);
  managers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private managerService: ManagerService
  ) {}

  ngOnInit() {
    // Fetch managers on component initialization
    this.managerService.getManagers().subscribe(
      (data) => {
        console.log('Managers Data:', data);
        this.managers = data;
      },
      (error) => {
        console.error('Error fetching managers:', error);
      }
    );

    // Initialize your form controls and group them
    this.myForm = this.fb.group({
      employeeCode: this.employeecode,
      firstName: this.firstname,
      lastName: this.lastname,
      dob: this.dob,
      email: this.email,
      gender: this.gender,
      managerId: this.managerId,
    });
  }

  submitForm() {
    console.log('Form Submitted:', this.myForm.value);
    this.showReview = true;
  }

  confirmSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;

      this.managerService.submitForm(formData).subscribe(
        (response) => {
          console.log('Form Successfully Submitted:', response);
          // Additional logic if needed
        },
        (error) => {
          console.error('Error Submitting Form:', error);
          // Handle error if needed
        }
      );
    } else {
      console.warn('Form is not valid. Cannot submit.');
      // You might want to provide feedback to the user that the form is not valid
    }
  }

  // Function to update ManagerId control when a manager is selected
  onManagerSelected(event: any) {
    const selectedManagerId = event.target.value;
    this.myForm.get('managerId')?.setValue(selectedManagerId);
  }
}
