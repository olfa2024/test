import { Component } from "@angular/core";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    rtl:true,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 1
     },
      940: {
       items: 1
     }
    },
   nav: true
  }
}
