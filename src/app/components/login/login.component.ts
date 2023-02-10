import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm, NgModel } from '@angular/forms';
import UserResponse from 'src/app/models/user-response';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) {}

  login(email:string, password:string) {
    this.userService.login(email,password)
    .subscribe( (resp:HttpResponse<any>) => { 
      this.userService.setUser(resp.body as UserResponse);
      this.userService.setAuthorization(resp.headers.get('Authorization') as string)
      console.log(this.userService.getUser()?.firstName);
    });
  }
}
