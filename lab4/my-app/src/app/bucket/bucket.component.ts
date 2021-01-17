import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  @Input() products: any;
  // @ts-ignore
  @Input() isEditable: false;
  @Output() eventProduct = new EventEmitter();



  constructor(private dataService: DataService, public cookieService: CookieService) {
  }

  ngOnInit() {
    console.log(this.products);
  }

  loadProducts() {
    const clientId =  this.cookieService.get('clientId')
    this.dataService.getItemsFromBucket(clientId).subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
}
