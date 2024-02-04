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
  departmentId = new FormControl('', Validators.required);
  positionId = new FormControl('', Validators.required);
  locationId = new FormControl('', Validators.required);
  managers: any[] = [];
  locations: any[] = [];
  departments: any[] = [];
  positions: any[] = [];

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

    this.managerService.getLocations().subscribe(
      (data) => {
        console.log('Locations Data:', data);
        this.locations = data;
      },
      (error) => {
        console.error('Error fetching Locations:', error);
      }
    );

    this.managerService.getDepartments().subscribe(
      (data) => {
        console.log('Department Data:', data);
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching Departments:', error);
      }
    );

    this.managerService.getPositions().subscribe(
      (data) => {
        console.log('Positions Data:', data);
        this.positions = data;
      },
      (error) => {
        console.error('Error fetching Positions:', error);
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
      departmentId: this.departmentId,
      positionId: this.positionId,
      locationId: this.locationId,
    });
  }

  submitForm() {
    console.log('Form Submitted:', this.myForm.value);
    this.showReview = true;
  }

  confirmSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;

      // Extract the year, month, and day from the date string
      const dobDate = new Date(formData.dob);
      const year = dobDate.getFullYear();
      const month = dobDate.getMonth() + 1; // Note: Months are zero-based in JavaScript
      const day = dobDate.getDate();
      const dayOfWeek = dobDate.getDay();

      // Map the form values to match the backend payload format
      const backendPayload = {
        employeeCode: formData.employeeCode,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dob: {
          year,
          month,
          day,
          dayOfWeek,
        },
        email: formData.email,
        gender: formData.gender,
        managerId: Number(formData.managerId),
        departmentId: Number(formData.departmentId),
        positionId: Number(formData.positionId),
        locationId: Number(formData.locationId),
      };

      // Wrap the payload in an array
      const backendPayloadArray = [backendPayload];

      this.managerService.submitForm(backendPayloadArray).subscribe(
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

  onLocationSelected(event: any) {
    const selectedLocationId = event.target.value;
    this.myForm.get('locationId')?.setValue(selectedLocationId);
  }
  onPositionSelected(event: any) {
    const selectedPositionId = event.target.value;
    this.myForm.get('positionId')?.setValue(selectedPositionId);
  }
  onDepartmentSelected(event: any) {
    const selectedDepartmetId = event.target.value;
    this.myForm.get('departmentId')?.setValue(selectedDepartmetId);
  }
}
