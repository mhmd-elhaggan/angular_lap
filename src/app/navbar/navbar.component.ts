import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public totalItem : number = 0;
  constructor(private cartService : CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
