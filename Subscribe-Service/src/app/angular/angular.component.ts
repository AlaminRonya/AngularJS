import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  constructor(private enrollService: EnrollService){

  }

  onEnroll(){
    this.enrollService.onEnroll("Angular");
  }

}
