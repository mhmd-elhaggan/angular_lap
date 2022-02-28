import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-item-detalis',
  templateUrl: './item-detalis.component.html',
  styleUrls: ['./item-detalis.component.scss']
})
export class ItemDetalisComponent implements OnInit {

  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    

 }
}
