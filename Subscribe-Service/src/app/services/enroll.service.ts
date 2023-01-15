import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }

  onEnroll(title: string){
    alert('Thank you enroll of '+title+' course.');
  }
}
