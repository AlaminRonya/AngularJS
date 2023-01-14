import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularHttpApi';

  // constructor(){
  //   type HttpResponse = {code: number, data: string};
  //   const observale = new Observable<HttpResponse>( subscriber =>{
  //     console.log('Inside subscriber.....');
  //     subscriber.next({code: 200, data: "this is data 1......"});
  //     subscriber.next({code: 201, data: "this is data 2......"});
  //     subscriber.next({code: 202, data: "this is data 3......"});
  //     subscriber.next({code: 203, data: "this is data 4......"});
  //     subscriber.next({code: 204, data: "this is data 5......"});
  //     subscriber.next({code: 205, data: "this is data 6......"});
  //     //subscriber.error({code: 500, msg: "An error occurred......"});
  //     setTimeout(()=>{
  //       subscriber.next({code: 400, data: "this is data more data......"});
  //     }, 3*1000);
  //     console.log('subscriber is done emitting.....');

  //   });

  //   observale.subscribe({
  //     next(respose: HttpResponse){
  //       console.log('Go to respone: ',respose);
  //     },error(error: any){
  //       console.error('something wrong occurred.....', error);
  //     }, complete(){
  //       console.log('done....');
  //     }
  //   });
  // }


  constructor(private userService: UserService){
  }
  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {console.log(response)},
      (error?: any) => console.log('Bad request=====>',error),
      ()=> console.log("Done getting all users...........")
    );
  };

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => {console.log(response)},
      (error?: any) => console.log('Bad request=====>',error),
      ()=> console.log("Done getting user...........")
    );
  };

}
