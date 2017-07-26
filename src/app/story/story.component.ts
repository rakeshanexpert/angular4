import { Component, OnInit,Injector } from '@angular/core';
import { homeservice } from '../services';
import { Router, ActivatedRoute,Params } from '@angular/router';
//Envoriment base url
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
    providers:[homeservice]
})
export class StoryComponent implements OnInit {
  storyBaseUrl=environment.baseUrl
  btstoryjsondata:any[];
  storyApiData:string;
  id:string; 
  stringUrl :any;
  currentUrl:any;
  constructor(private _storyService:homeservice, private _route: ActivatedRoute,private router: Router) {
     let currentUrl = this.router.url;
     this.stringUrl = currentUrl.split("-");
     this.id = this.stringUrl[this.stringUrl.length - 1].substring(0,this.stringUrl[this.stringUrl.length - 1].indexOf("."));
     
  }
  ngOnInit() {     
    //console.log('Json ID first'+this.id);
    this.storyApiData = 'http://10.10.25.180:8080/JWebS2/rest/story/json/' + this.id;        
  }
  ngAfterViewInit(){   
     this._storyService.getjsonData(this.storyApiData).subscribe(data => this.btstoryjsondata = data);
  }


}
    
