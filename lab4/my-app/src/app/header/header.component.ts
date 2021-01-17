import {Component, DoCheck, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(public cookieService: CookieService, private route:  Router,) { }

  ngOnInit(): void {
  }

  logOut() {
    this.cookieService.delete('admin-key');
    this.route.navigate(['/'])
  }

  public authButton: any;
  ngDoCheck() {
    if(this.cookieService.get('admin-key') === environment.adminKey) {
      this.authButton = {
        name: 'Log Out',
        isAdmin: true
      }
    } else {
      this.authButton = {
        name: 'Log In as an Admin',
        isAdmin: false
      }
    }
  }

}
