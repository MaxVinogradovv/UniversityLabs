import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products: any;
  @Input() isEditable: boolean = false;
  @Input() isBucket: boolean = false;
  @Output() eventProduct = new EventEmitter();

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log(this.products);
  }

  removeProduct(item: any) {
    console.log('removeProduct:');
    console.log(item);
    this.dataService.removeProduct(item).subscribe(data => {
      console.log(data);
      this.sendEvent();
    })
  }

  removeFromBucket(item: any) {
    console.log('removeProduct:');
    console.log(item);
    this.dataService.removeFromBucket(item).subscribe(data => {
      console.log(data);
      this.sendEvent();
    })
  }

  sendEvent() {
    this.eventProduct.emit();
  }

  addToBucket(item: any) {
    this.dataService.addProductToBucket(item).subscribe(data => {

    })
  }
}
