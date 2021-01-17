import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

const hashGenerator = () => {
  return new Date().getUTCMilliseconds();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public cookieService: CookieService) {
    this.cookieService.set('clientId', hashGenerator().toString())
  }

  title = 'my-app';
}
