import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  UserResponse from '../models/user-response';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl: string = "http://localhost:8080/auth/login"
  private user = new UserResponse(0,"","","",false,false);
  private authorization?:string;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getUser() {
    return this.user;
  }

  public getAuthorization() {
    return this.authorization;
  }

  public setUser(newUser:UserResponse){
    this.user = newUser;
  }

  public setAuthorization(auth:string) {
    this.authorization = auth;
  }

  login(emailInput:string,passwordInput:string) {
    return this.http.post<any>(this.loginUrl, 
      { email:emailInput,
      password:passwordInput },
      {observe: 'response'});
  }
}
