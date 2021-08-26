import { Login } from 'src/app/common/login';

import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  loginUrl = "http://localhost:8080/api/login";
  adminNameUrl = "http://localhost:8080/api/login/adminName";
  updatePasswordUrl = "http://localhost:8080/api/login/update";
  login: Login;


  constructor(private httpClient: HttpClient) { }



  // getListOfLoginAdminNamePassword():Observable<Login[]>{
  //   return this.httpClient.get<Login[]>(this.loginUrl);
  // }
  
  getTheListOfAdminName(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.adminNameUrl);
  }

  getTheLoginCredential(theAdminName: string): Observable<Login> {
    const url = `${this.loginUrl}/${theAdminName}`;
    return this.httpClient.get<Login>(url);
  }

  updateTheLoginCredential(theLogin: Login): Observable<Login> {

    return this.httpClient.post<Login>(this.updatePasswordUrl, theLogin);
  }


  authenticate(adminName: string, password: string) {
    this.getTheLoginCredential(adminName);

    let theAdminName: string = this.login.adminName;
    let thePassword: string = this.login.password;
    if ((adminName === theAdminName) && (password === thePassword)) {
      sessionStorage.setItem('adminName', adminName)
      return true;

    } else {
      return false;
    }


  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('adminName');
    console.log(!(admin === null));
    return !(admin === null);

  }

  logOut() {
    sessionStorage.removeItem('adminName');
  }


}
