import { Component, OnInit } from '@angular/core';
import { homeservice } from '../services';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers:[homeservice]
})
export class PhotoComponent implements OnInit {

  photosjsondata:any[];
  hrefUrl:any;
  photoApiData:string;

  constructor(private _photoServices:homeservice) {}
  
  ngOnInit() {
    this.photoApiData = 'http://10.10.25.180:8080/JWebS2/rest/gallerylist/json/';    

    }

ngAfterViewInit(){
   this._photoServices.getjsonData(this.photoApiData).subscribe(data=>this.photosjsondata=data); 
}

getMyUrl(url:string,id:number){
   // console.log(this.hrefUrl);
    this.hrefUrl = url.replace(id+'.html','').concat('/1/'+id+'.html');
    return url.replace('.html','').concat('/1/'+id+'.html');
    }



}
