import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+'/users');
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl+'/users/1');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl+'/users', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>('http://appi.com/users', user);
  }




}
