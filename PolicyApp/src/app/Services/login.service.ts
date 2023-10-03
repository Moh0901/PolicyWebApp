import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginAPIUrl = "https://localhost:7012/api/v1.0/Login";
  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(this.loginAPIUrl,user,{responseType:'text'});
  }

  isLoggedin():boolean{
    return localStorage.getItem("jwt")?true:false;
  }
}
