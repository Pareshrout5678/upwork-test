import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'app/services/services.service';
import * as Chartist from 'chartist';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent  {

  users: any[] = [];

  constructor(private service: ServicesService,private ngxService: NgxUiLoaderService) { 
    this.ngxService.start(); 

    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
  }
  getAllFilms$ = this.service.getAllFilms$;

 

}
