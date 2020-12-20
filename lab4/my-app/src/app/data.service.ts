import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
  constructor(private http:HttpClient){
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
}
