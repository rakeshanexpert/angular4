import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; //for http services

//Services for routing
import { homeservice } from './services';


//Common Include File
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

//Routing Include File
import { Approutingmodel } from './app.routingmodel';
import { routingComponents } from './app.routingmodel';
import { StoryComponent } from './story/story.component';
import { sectionComponent } from './section/section.component';
import { EconomyComponent } from './economy/economy.component';
import { CategoryComponent } from './category/category.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponentComponent,
    routingComponents,
    StoryComponent,
    sectionComponent,
    EconomyComponent,
    CategoryComponent,
    PhotoGalleryComponent,
    PhotoComponent
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpModule,
    Approutingmodel,
  ],
  providers: [homeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
