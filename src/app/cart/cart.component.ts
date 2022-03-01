import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public Total !: number;
  constructor(private cartService : CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.Total = this.cartService.getTotalPrice();
    })
  }
   removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
}
