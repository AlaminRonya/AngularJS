import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIEW-CHILD';

  @ViewChild('dobInput') dateOfBirth?: ElementRef;
  @ViewChild('ageInput') age?: ElementRef;
  @ViewChild(DemoComponent, {static: true}) demoComp?: DemoComponent;
  
  calculateAge(){
    let dob = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let ageOfYear = currentYear - dob;
    this.age!.nativeElement.value = ageOfYear;
    //console.log(this.dateOfBirth);
    //console.log(this.age);
  }
}
