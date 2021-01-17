import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
@Injectable()
export class DataService {
  constructor(private http:HttpClient, public cookieService: CookieService) {
  }
  getProducts(){
    return this.http.get('/getproducts');
  }
  removeProduct(item: { _id: string}){
    let obj={id:item._id}
    return this.http.post('/removeproduct',obj,{responseType:'text'})
  }
  addProduct(item: any){
    return this.http.post('/addproduct',item,{responseType:'text'});
  }

  getItemsFromBucket(clientId: any){
    return this.http.get('/bucket/items', {
      params: {clientId}
    });
  }

  addProductToBucket(item: any) {
    return this.http.post('/bucket/items', {
      clientId: this.cookieService.get('clientId'),
      item
    });
  }

  removeFromBucket(item: any) {
    return this.http.delete(`/bucket/items/${item._id}`,
    );
  }
}
