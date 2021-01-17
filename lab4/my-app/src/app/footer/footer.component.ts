import {Component, DoCheck, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( public cookieService: CookieService) { }

  ngOnInit(): void {
  }

}
