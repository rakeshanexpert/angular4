import { Component, OnInit } from '@angular/core';
declare var Swiper;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'

})
export class NavComponent implements OnInit {

  constructor() { }
  ngOnInit() {
      new Swiper('.bt_nav_section .swiper-container', {
        slidesPerView: 'auto',     
            spaceBetween: 20
            //loop: true
        });
     }

}
