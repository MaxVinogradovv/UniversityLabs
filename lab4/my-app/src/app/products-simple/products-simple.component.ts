import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products-simple.component.html',
  styleUrls: ['./products-simple.component.css']
})
export class ProductsSimpleComponent implements OnInit {
  public products: any;

  public name: any;
  public description: any;
  public price: any;

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
