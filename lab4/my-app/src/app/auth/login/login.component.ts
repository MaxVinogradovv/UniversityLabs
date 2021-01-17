import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AuthService} from "../../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container" style="margin-top: 10%">
      <div class="login-content">
        <mat-toolbar class="login-toolbar" color="primary">My App</mat-toolbar>
        <mat-card>
          <form [formGroup]="loginForm" novalidate (ngSubmit)="onSubmit()">
            <mat-form-field>
              <mat-icon matPrefix>person_outline</mat-icon>
              <input autofocus type="text" matInput placeholder="Email" formControlName="email">
            </mat-form-field>

            <mat-form-field>
              <mat-icon matPrefix>lock_outline</mat-icon>
              <input type="password" autocomplete="false" matInput placeholder="Password" formControlName="password">
            </mat-form-field>

            <button type="submit" mat-raised-button color="primary">Login</button>
          </form>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private route:  Router,
              public cookieService: CookieService) {}

  onSubmit() {
    debugger
    this.authService.loginUser(this.loginForm.value).subscribe(data => {
      if(data._id) {
        this.route.navigate([`/admin/${data._id}`],);
        this.cookieService.set('admin-key', data._id);
      } else {
        this.route.navigate(['/'])
      }
    })
  }

}
