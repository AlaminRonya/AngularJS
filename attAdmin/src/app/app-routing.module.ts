import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'doctor-register', component: DoctorRegisterComponent},
  {path: 'doctor-list', component: DoctorListComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data: {role:'ADMIN'}},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard], data: {role:'USER'}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'userlist', component: UserTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
