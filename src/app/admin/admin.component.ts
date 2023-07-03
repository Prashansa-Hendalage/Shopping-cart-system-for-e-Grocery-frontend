import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{
  adminData:any = {
    "productCount": 3,
    "ordersPlacedCount": 1,
    "customerCount":4,
    "orderDeliveredCount":5
    }

    constructor(private productService: ProductService){

    }

ngOnInit():void{
  this.getAdminData();
}

getAdminData(){
  this.productService.getAdminData().subscribe(
    (resp)=>{
      console.log(resp);
      this.adminData = resp;
    },(error)=>{
      console.log(error);
    }
  );
}

}
