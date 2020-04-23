import { Component, OnInit } from '@angular/core';
import { MemberLoginService } from '../../services/member-login.service'
import { MemberLogin } from 'src/app/modules/login_interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedin = [];

  constructor(private _authService: MemberLoginService) { }

  ngOnInit() {
    this._authService.authenticateMember().subscribe(resp => {
      console.log("inside login component");
           console.log(resp);}); 
}
}
