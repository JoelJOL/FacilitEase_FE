import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostAPIService } from '@app/features/service/httpService/post-api.service';

@Component({
  selector: 'app-add-department-form',
  templateUrl: './add-department-form.component.html',
  styleUrls: ['./add-department-form.component.css']
})
export class AddDepartmentFormComponent implements OnInit {
  departmentForm!: FormGroup;

  constructor(private postAPIService: PostAPIService) {}

  department: any = {
    DeptName: '', // Use correct field name based on the API
  };

  ngOnInit() {
    this.departmentForm = new FormGroup({
      deptName: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      // Assign form values to the department object with correct field names
      this.department.DeptName = this.departmentForm.get('deptName')?.value;

      // Call the service method to post department data
      this.postDepartment();
    }
  }

  postDepartment() {
    this.postAPIService.postDepartment(this.department).subscribe(
      (response) => {
        console.log('Post Successful:', response);
      },
      (error) => {
        console.error('Post Error:', error);
        // Handle error as needed
      }
    );
  }
}
