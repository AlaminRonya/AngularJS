import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  id = "";
  drop(value: any) {
        if (this.id == value) {
            this.id = "";
        }
        else {
            this.id = value;
        }
    }
}
