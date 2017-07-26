import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { homeservice } from '../services';
import { Http,Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  providers:[homeservice]
})
export class PhotoGalleryComponent implements OnInit {

      photosgalleryjsondata:any[];
      //base_url_home:string=environment.base_url_home;
      id:string; 
      hrefUrl:string;
      sef_url:string;
      gallerydata:any[];
      jsonApiData:any;
      stringUrl:any;
      stringUrl2:any;
   constructor(private _appService: homeservice,private route:ActivatedRoute,private router: Router){ 
      let currentUrl = this.router.url;
      this.stringUrl = currentUrl.split("/1/");
      let currentUrl2 = this.stringUrl;
      this.stringUrl2 = currentUrl2[1].split(".html");
      this.id = this.stringUrl2[0];
    }


    ngOnInit(){
      this.sef_url = this.stringUrl[0].replace('/gallery/','');
     // console.log('Json ID first '+this.id + " sef_url: " + this.sef_url);  
      this.jsonApiData = 'http://10.10.25.180:8080/JWebS2/rest/photo/json/'+this.id;           
        
    }
    ngAfterViewInit(){
      this._appService.getjsonData(this.jsonApiData).subscribe(data => this.gallerydata = data);

    }


}



