import { Component, OnInit } from '@angular/core';
import { homeservice } from '../services';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.css'],
  providers:[homeservice]
})
export class EconomyComponent implements OnInit {
  economyBaseUrl=environment.baseUrl
  economyjsondata:any[];
  private economyApiData = 'assets/jsondata/bthome.json';
  hrefUrl:string;
  constructor(private _economyService:homeservice) { }
  
  ngOnInit() {
    this._economyService.getjsonData(this.economyApiData).subscribe(data => this.economyjsondata = data);
  }
   
}
