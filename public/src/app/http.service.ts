import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }
  getProducts() {
    return this._http.get('/api/products');
  }

  addProduct(newProduct) {
    return this._http.post('/api/products/new', newProduct);      
  }

  getProduct(id){
    return this._http.get('/api/products/'+id+'/update')
  }
  
  updateProduct(id, product){
    return this._http.put('/api/products/'+id, product);
  }
  delete(id){
    return this._http.delete('/api/products/'+id);
  }



}