import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpUser = new Signup()

  constructor(private _userservice : UserService) { }

  ngOnInit(): void {
  }

  signupUserData(){
      this._userservice.signupUser(this.signUpUser)
          .subscribe(
              res => console.log(res),
              err => console.log(err)
          )
  }

}
