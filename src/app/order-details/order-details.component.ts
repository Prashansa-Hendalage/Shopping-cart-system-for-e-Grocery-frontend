import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  displayedColumns = ["Id","Product Name","Name","Address","Contact No.","Status","Action"];
  allOrdersDetails:any=[];
  status:string = 'All';

  constructor(private productService: ProductService){

  }

  ngOnInit():void{
    this.getAllOrderDetailsForAdmin(this.status);
  }

  getAllOrderDetailsForAdmin(statusPrameter: string){
    this.productService.getAllOrderDetailsForAdmin(statusPrameter).subscribe(
      (resp)=>{
        console.log(resp);
        this.allOrdersDetails = resp;
      },(error)=>{
        console.log(error);
      }
    );
  }
  markAsDelivered(orderId: any){
    console.log(orderId);
    this.productService.markAsDelivered(orderId).subscribe(
      (responese) => {
        this.getAllOrderDetailsForAdmin(this.status);
        console.log(responese);
      },(error)=>{
        console.log(error);
      }
    );
  }
}
