import { Component, OnInit } from '@angular/core';
import { homeservice } from '../services';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[homeservice]
})
export class CategoryComponent implements OnInit {
  categoryBaseUrl=environment.baseUrl
  categoryjsondata:any[];
  categoryApiData:string;
  stringUrl :any;
 
  currentUrl:any;
  id:string; 
  categorySefTitle:string;
  hrefUrl:string; 

  constructor(private _categoryService:homeservice, private _route: ActivatedRoute, private router: Router) {
    let currentUrl = this.router.url;
    this.stringUrl = currentUrl.split("/category/");
    let stringUrl2 = this.stringUrl;
    stringUrl2 =   this.stringUrl[1];
  
     this.id = stringUrl2.split("/")[0];
   }
  ngOnInit() {
    
    this.categorySefTitle = this._route.snapshot.params['categorySefTitle']; 
   // this.id = this._route.snapshot.params['id'];  
    
    this.categoryApiData = 'http://10.10.25.180:8080/JWebS2/rest/latest/category/json/' + this.id;     
    
  }
  ngAfterViewInit(){   
     this._categoryService.getjsonData(this.categoryApiData).subscribe(data => this.categoryjsondata = data);
  }

   getMyUrl(url:string,id:number){
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
  }


}
