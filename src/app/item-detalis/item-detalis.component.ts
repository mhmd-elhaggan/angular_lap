import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartserviceService } from 'src/app/service/cartservice.service'; 

@Component({
  selector: 'app-item-detalis',
  templateUrl: './item-detalis.component.html',
  styleUrls: ['./item-detalis.component.scss']
})
export class ItemDetalisComponent implements OnInit {
  productDetails : any;
  id : any;
  
  constructor(private api : ApiService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.api.getProductDetails(this.id).subscribe(
      res =>{
        this.productDetails = res;
      },
      (error) => {
        console.log(error);
      }
    );
    
 }
 
}
