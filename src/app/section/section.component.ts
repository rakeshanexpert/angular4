import { Component, OnInit,Injector } from '@angular/core';
import { homeservice } from '../services';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-story',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
    providers:[homeservice]
})
export class sectionComponent implements OnInit {
  sectionBaseUrl=environment.baseUrl
  sectionjsondata:any[];
  sectionApiData:string;
  stringUrl :any;
  id:string; 
  sectionSefTitle:string;
  hrefUrl:string;

  constructor(private _storyService:homeservice, private _route: ActivatedRoute, private router: Router) {
    let currentUrl = this.router.url;
    this.stringUrl = currentUrl.split("/section/");
    let stringUrl2 = this.stringUrl;
    stringUrl2 =   this.stringUrl[1];
  
     this.id = stringUrl2.split("/")[0];
   }
  ngOnInit() {
    
    this.sectionSefTitle = this._route.snapshot.params['sectionSefTitle']; 
    //this.id = this._route.snapshot.params['id']; 
    this.sectionApiData = 'http://10.10.25.180:8080/JWebS2/rest/latest/section/json/' + this.id;     
    
  }
  ngAfterViewInit(){   
     this._storyService.getjsonData(this.sectionApiData).subscribe(data => this.sectionjsondata = data);
  }

   getMyUrl(url:string,id:number){
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
  }

}
    
