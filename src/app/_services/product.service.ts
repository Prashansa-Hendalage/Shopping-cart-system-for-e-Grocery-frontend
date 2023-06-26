import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { OrderDetails } from '../_model/order-details.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductDetails(isSingleProductCheckout: string | null, id: string | null):import("rxjs").Observable<Product[]> {
    console.log("running getProductDetails")
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { 
    
  }
  public addProduct(product: FormData){
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct",product);
  }

  public getAllProducts(){
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts");
  }

  public getProductDetailsById(productId: number){
    return this.httpClient.get<Product>("http://localhost:9090/getProductDetailsById/"+productId)
  }

  public deleteProduct(productId: number){
    return this.httpClient.delete("http://localhost:9090/deleteProductDetails/"+productId);

  }

  public getProductDeails(isSingleProductCheckout: any,productId: number){
    return this.httpClient.get<Product[]>("http://localhost:9090/getProductDetails/"+isSingleProductCheckout+"/"+productId);
  }

  public placeOrder(orderDetails: OrderDetails){
    return this.httpClient.post("http://localhost:9090/placeOrder/",orderDetails);
  }
}
