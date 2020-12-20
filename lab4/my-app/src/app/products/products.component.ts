import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

  addProduct() {
    if (!this.name) {
      return alert('name is required')
    }
    if (!this.description) {
      return alert('description is required')
    }
    if (!this.price) {
      return alert('price is required')
    }
    if(!Number.isInteger(+this.price)) {
      return alert('price needs to be a number')
    }
    if (this.products.find((item: any) => item.name == this.name)) {
      return alert(`Product name ${this.name} already exists`)
    }
    this.dataService.addProduct({name: this.name, description: this.description, price: this.price}).subscribe(data => {
      this.loadProducts();
    })
  }
}
