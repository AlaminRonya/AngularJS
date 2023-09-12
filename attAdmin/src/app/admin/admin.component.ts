import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private userService: UserService){}
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  fetchAdminData() {
    const authToken = localStorage.getItem("jwtToken") as string; // Replace with a valid auth token
    this.userService.admin(authToken).subscribe(
      (data) => {
        // this.adminData = data;
        console.error('Error fetching admin data:', data);
      },
      (error) => {
        console.error('Error fetching admin data:', error);
      }
    );
  }









}
