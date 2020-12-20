import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
}
