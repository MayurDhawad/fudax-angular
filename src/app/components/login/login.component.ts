import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser = new Login()

  constructor( private _userservice : UserService) { }

  ngOnInit(): void {
  }

  loginUserData(){
      this._userservice.loginUser(this.loginUser)
          .subscribe(
              res => console.log(res),
              err => console.log(err)
          )
  }

}
