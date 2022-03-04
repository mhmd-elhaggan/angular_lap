import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../service/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private srvLoader:LoaderService) { }
  isLoading: Subject<boolean> = this.srvLoader.isLoading;
  ngOnInit(): void {
  }

}
