import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberLogin } from '../modules/login_interface';

@Injectable({
  providedIn: 'root'
})

export class MemberLoginService {
	private URL_login = "/assets/dataUserLogin.json";

  constructor(private _httpService: HttpClient) { }

  authenticateMember(): Observable<MemberLogin> { 
  	return this._httpService.get<MemberLogin>(this.URL_login)  
  }

}
