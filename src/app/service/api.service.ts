import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("../assets/products.json")

   // return this.http.get<any>("https://fakestoreapi.com/products") 
    
   // }))

  }
  getProductDetails(productId: any) {

    //return this.http.get<any>(`../assets/products.json/${productId}`);
     return this.http.get(`https://fakestoreapi.com/products/${productId}`);
  }

}
