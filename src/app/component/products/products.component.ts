import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public cartItemList: any = []
  public productList: any;
  constructor(private api: ApiService, private cartService: CartserviceService, private router: Router) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
      });

  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  viewProduct() {
    this.cartItemList.map((a: any, index: any) => {
      if (this.productList.id === a.id) {
        this.router.navigate(['/item-detalis', this.productList.id]);
      }
    })
}
}