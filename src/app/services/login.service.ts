import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../classes/user';
import { Customer } from '../classes/customer';
import { Engineer } from '../classes/engineer';
import { Manager } from '../classes/manager';
import { HttpClient } from '@angular/common/http'
import { UserService } from './user.service';
import { Userdto } from '../classes/userdto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // loggedInUser:Subject<User>=new BehaviorSubject<User>(null);
  loggedInUser: Subject<User | null> = new BehaviorSubject<User | null>(null);
  loggedInCustomer: Subject<Customer | null> = new BehaviorSubject<Customer | null>(null);
  loggedInEngineer: Subject<Engineer | null> = new BehaviorSubject<Engineer | null>(null);
  loggedInManager: Subject<Manager | null> = new BehaviorSubject<Manager | null>(null);

  constructor(private http: HttpClient, private userService: UserService) { }

  checkLogin(userDto: Userdto): Observable<User> {

    const loginUrl = "http://localhost:8081/login/check";

    this.http.post<User>(loginUrl, userDto).subscribe(data => {
      this.loggedInUser.next(data);

      // If user is a customer then get their details
      if (data.role == 'customer') {
        this.userService.getCustomerByUserId(data.id).subscribe(data => {
          this.loggedInCustomer.next(data);
        })
      }
      // If user is an Engineer then get their details
      if (data.role == 'engineer') {
        this.userService.getEngineerByUserId(data.id).subscribe(data => {
          this.loggedInEngineer.next(data);
        })
      }

      // If user is an Manager then get their details
      if (data.role == 'manager') {
        this.userService.getManagerByUserId(data.id).subscribe(data => {
          this.loggedInManager.next(data);
        })
      }
    })

    return this.http.post<User>(loginUrl, userDto);
  }
}
