import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItem {
  constructor() {
  }

  @Input() item: any;
  @Output() onRemove = new EventEmitter<never>();

  remove() {
    this.onRemove.emit();
  }
}
