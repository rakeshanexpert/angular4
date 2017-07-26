import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Include Routing Path
import {HomeComponent} from './home/home.component';
import {StoryComponent} from './story/story.component';
import {sectionComponent} from './section/section.component';
import { EconomyComponent } from './economy/economy.component';
import { CategoryComponent } from './category/category.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [
  
  { path: '',
   component:HomeComponent  
  },

  { 
    path: 'economy',    
    component: EconomyComponent
  },
   {
     path: "story/:sef_url.replace('.html','').concat('-'+:id+'.html')", 
     component: StoryComponent 
    },
    { 
      path: 'category/:categoryId/:categorySefTitle',
       component: CategoryComponent 
    },
    { 
     path: 'section/:id/:sectionSefTitle',
     component: sectionComponent
    },
     { 
     path: 'photos',
     component: PhotoComponent
    },
       { 
     path: 'gallery/:id/1/:categorySefTitle',
     component: PhotoGalleryComponent
    },
   
     
   

    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ], 
  exports:[
       RouterModule 
    ]
})

export class Approutingmodel{}
export const routingComponents = [HomeComponent,sectionComponent,StoryComponent,EconomyComponent,sectionComponent,CategoryComponent,PhotoComponent,PhotoGalleryComponent]