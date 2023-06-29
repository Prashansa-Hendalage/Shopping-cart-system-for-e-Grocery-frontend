import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from './_model/product.model';
import { Observable, map } from 'rxjs';
import { ProductService } from "./_services/product.service";
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService implements Resolve<Product[]>{

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }

  resolve(route:ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Product[] | Observable<Product[]> | Promise<Product[]> {
    
    const id = route.paramMap.get("id");
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout");
    if (id === null) {
      // Handle the case where id is null
      // You can provide a default value or return an error
      // For example:
      throw new Error("ID parameter is missing."); // Throw an error
    }

    const productId = Number(id); // Convert id to a number

    return this.productService.getProductDetails(isSingleProductCheckout,productId)
      .pipe( 
      map(
        (x: Product[], i) => x.map((product:Product) => this.imageProcessingService.createImages(product))
      )
   );
  }
}
