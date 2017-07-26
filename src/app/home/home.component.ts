import { Component, OnInit,} from '@angular/core';
import { homeservice } from '../services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[homeservice]
})
export class HomeComponent implements OnInit  {

  homejsondata:any[];
  private jsonApiData = 'assets/jsondata/bthome.json';
  hrefUrl:string;
  constructor(private _homeService:homeservice) { }
  getMyUrl(url:string,id:number){
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
  }
  ngOnInit() {
    this._homeService.getjsonData(this.jsonApiData).subscribe(data => this.homejsondata = data);
  }
   

}
