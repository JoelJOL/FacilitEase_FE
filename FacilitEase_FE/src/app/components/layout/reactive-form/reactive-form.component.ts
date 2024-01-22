import { Component } from '@angular/core';
import { FormServiceService } from '@app/features/service/httpService/form-service.service';
import { FormControl, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  [x: string]: any;
  employeecode = new FormControl('', Validators.required);
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  dob = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  managerId = new FormControl('', Validators.required);

  showReview = false;
  // employeeControl: any;
  // firstnameControl: any;
  // lastnameControl: any;
  // genterControl: any;
  // dobControl: any;
  // genderControl: any;

  constructor(private formServiceService: FormServiceService) {}

  submitForm() {
    // Display the review section
    this.showReview = true;
  }

  confirmSubmit() {
    const formData = {
      Employeecode: this.employeecode.value,
      Firstname: this.firstname.value,
      Lastname: this.lastname.value,
      DOB: this.dob.value,
      Email: this.email.value,
      Gender: this.gender.value,
      ManagerId: this.managerId.value,
      // Add other form fields as needed
    };

    // Create HttpHeaders with the Content-Type header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Stringify the form data
    const jsonData = JSON.stringify(formData);

    // Submit the form data to the backend service with the appropriate headers
    this.formServiceService.submitFormData(jsonData, headers).subscribe(
      (response) => {
        console.log('Data successfully submitted:', response);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.error('Error submitting data:', error);
        // Handle error, e.g., show an error message
      }
    );
  }
}
