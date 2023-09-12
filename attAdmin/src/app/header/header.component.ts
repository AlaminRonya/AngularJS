import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userAuthService: UserAuthService, private router: Router, private userService: UserService){}

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public isCheckUser(role: string){
    return role === this.userAuthService.getRole();
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

  fetchAdminData() {
    const authToken = 'your-auth-token'; // Replace with a valid auth token
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
