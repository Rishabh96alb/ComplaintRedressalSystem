import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AssignenginnerComponent } from './components/assignenginner/assignenginner.component';
import { CoreComponent } from './components/core/core.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketCustomerComponent } from './components/ticket-customer/ticket-customer.component';
import { TicketEditComponent } from './components/ticket-edit/ticket-edit.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'home', component: TicketListComponent },
  { path: "ticket", component: TicketComponent },
  { path: "ticket-list", component: TicketListComponent },
  { path: "create", component: CreateUserComponent },
  { path: "users/:role", component: UserListComponent },
  { path: "editUser/:id/:role", component: CreateUserComponent },
  { path: "login", component: LoginComponent },
  { path: "viewTicket/:id", component: TicketComponent },
  { path: "feedback/:ticketId", component: FeedbackComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssignenginnerComponent,
    CoreComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateUserComponent,
    FeedbackComponent,
    HomeComponent,
    TicketComponent,
    TicketCustomerComponent,
    TicketEditComponent,
    TicketListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
