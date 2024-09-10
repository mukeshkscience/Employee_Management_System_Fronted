import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }


  public employeeList(){
    return this.http.get(`${this.baseUrl}/employee`)
  }

  public getEmployeeById(id:number){
    return this.http.get(`${this.baseUrl}/employee/${id}`)
  }

  public addEmployee(user:any){
    return this.http.post(`${this.baseUrl}/employee`,user)
  }
}
