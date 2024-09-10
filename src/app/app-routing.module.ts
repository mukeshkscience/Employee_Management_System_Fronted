import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/List_Employees/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './components/Update_Employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './components/View_Employee/view-employee/view-employee.component';
import { HomeComponent } from './components/Home/home/home.component';
import { AddEmployeeComponent } from './components/Add_Employee/add-employee/add-employee.component';
import { AboutComponent } from './components/about/about/about.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { LoginComponent } from './components/Login/login/login.component';
import { SignupComponent } from './components/Signup/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'list-employee',component:ListEmployeeComponent},
  {path:'update-employee',component:UpdateEmployeeComponent},
  {path:'view-employee',component:ViewEmployeeComponent},
  {path:'home',component:HomeComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
