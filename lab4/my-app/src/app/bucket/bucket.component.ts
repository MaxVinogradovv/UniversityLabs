import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  constructor(private dataService: DataService, public cookieService: CookieService) {
  }

  public products: any;

  ngOnInit() {
    this.loadProducts();
  }

  public totalPrice = 0;
  loadProducts() {
    const clientId =  this.cookieService.get('clientId')
    this.dataService.getItemsFromBucket(clientId).subscribe(data => {
      this.products = data;
      this.totalPrice = 0;
      // @ts-ignore
      for(let item of data) {
        this.totalPrice += item.price;
      }
    })
  }
}
