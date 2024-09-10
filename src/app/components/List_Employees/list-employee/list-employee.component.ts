import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employee:any=[
    {name:''},
    {username:''},
    {dobOfJoining:''},
    {email:''},
    {mobile:''},
    {department:''},
    {designation:''}
  ];

  constructor(private employeeService:EmployeeService) {

  }
  ngOnInit(): void {
    this.employeeService.employeeList().subscribe((data)=>{
      this.employee=data;
    })
  }



}
