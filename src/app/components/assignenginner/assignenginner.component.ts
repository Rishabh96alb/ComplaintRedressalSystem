import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/classes/ticket';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assignenginner',
  templateUrl: './assignenginner.component.html',
  styleUrls: ['./assignenginner.component.css']
})
export class AssignenginnerComponent {

  ticket!: Ticket;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router
  }

}
