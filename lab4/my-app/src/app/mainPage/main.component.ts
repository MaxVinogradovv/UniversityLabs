import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public products: any;
  public bucketItems: any;

  public name: any;
  public description: any;
  public price: any;

  constructor(private dataService: DataService, public cookieService: CookieService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe(data => {
      this.dataService.getItemsFromBucket(this.cookieService.get('clientId')).subscribe(items => {
        this.products = data;
        this.bucketItems = items
        console.log(items);
      })
    })
  }
}
