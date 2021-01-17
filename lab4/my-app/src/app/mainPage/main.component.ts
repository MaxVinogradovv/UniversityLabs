import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
