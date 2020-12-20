import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
  constructor(private http:HttpClient){
  }
  getProducts(){
    return this.http.get('/getproducts');
  }
  removeProduct(item){
    let obj={id:item._id}
    return this.http.post('/removeproduct',obj,{responseType:'text'})
  }
  addProduct(item){
    return this.http.post('/addproduct',item,{responseType:'text'});
  }
}
