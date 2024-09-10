import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  userForm!: FormGroup;

  user = {
    name: '',
    username: '',
    password: '',
    email: '',
    mobile: '',
    designation: '',
    department: '',
    dateOfJoining: null,
    address: ''
  };


  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      designation: new FormControl(''),
      department: new FormControl(''),
      dateOfJoining: new FormControl(''),
      address: new FormControl('')
    });
  }

  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);
    // Here you can handle the form submission, such as sending data to a server
  }
  }


