import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  PATH_OF_API = "http://localhost:8281/api/v1/auth"
  // requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  requestHeader = new HttpHeaders({ 'Authorization': 'True' });

  constructor(private httpClient: HttpClient){}
  ngOnInit(): void{}
  login(loginData: any): Observable<any> {
    return this.httpClient.post(this.PATH_OF_API + "/authenticate", loginData, {
      headers: this.requestHeader,
    });
  }

  admin(authToken: string): Observable<any> {
    return this.httpClient.get('/api/v1/admin', {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
  }
}
