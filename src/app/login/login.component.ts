import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from '../core/auth.service';
@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)= "onSumbit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input type="text"
                 name = "username"
                 [(ngModel)]="username"
                 #usernameRef="ngModel"
                 required
                 minlength = "3"
          />
          {{usernameRef.errors|json}}
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 characters</div>
          <input required type="password"
                 name = "password"
                 [(ngModel)] = "password"
                 #passwordRef="ngModel"
          />
          {{passwordRef.errors|json}}
          <div *ngIf="passwordRef.errors?.required">this is required</div>

          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [
    'input.ng-invalid{border: 3px solid red;} ' +
    'input.ng-valid{border: 3px solid green;}'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(@Inject('auth') private service) {
    this.service = new AuthService();
  }
  onSumbit(formValue){
    console.log('auth result is ' + this.service.loginWitHCredentials(formValue.login.username, formValue.login.password));
  }
  ngOnInit() {
  }

}
