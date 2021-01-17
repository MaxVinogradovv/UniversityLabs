import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck {
  @Input() products: any;
  @Input() bucketItems: any;
  @Input() isEditable: boolean = false;
  @Input() isBucket: boolean = false;
  @Output() eventProduct = new EventEmitter();

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

   for(let item of this.products || []) {
     if(this.bucketItems.find((bucketItem : any) => bucketItem.name === item.name)){
       item.isInBucket = true
     }
   }
  }

  ngDoCheck(){
    if(this.bucketItems) {
      for (let item of this.products || []) {
        if (this.bucketItems.find((bucketItem: any) => bucketItem.name === item.name)) {
          item.isInBucket = true
        }
      }
    }
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
      this.sendEvent();
    })
  }
}
