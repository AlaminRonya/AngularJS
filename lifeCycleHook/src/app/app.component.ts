import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycleHook';

  inputTxt: string = '';
  destroy: boolean = true;

  OnSubmit(inputEL: HTMLInputElement){
    this.inputTxt = inputEL.value;
    console.log(inputEL);
  }
  destroyComponent(){
    this.destroy = false;
  }
}
