import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  loggedInUser: any;

  setUserToNull() {
    this.loggedInUser = null;
  }


  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (this.loginService.loggedInUser != null) {
      this.loginService.loggedInUser.subscribe(data => {
        this.loggedInUser != data;
      })
    }
    else {
      this.router.navigateByUrl('login');
    }
  }

}
