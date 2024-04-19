import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() mainTitle: string = '';
  @Input() subTitle: string = '';
  @Input() imgUrl: string = 'https://t3.ftcdn.net/jpg/05/58/86/78/360_F_558867807_bOMGlQn9dq1ZCT6ZFoIyYMVLKT0fGzXg.jpg';
  @Input() action: string = '';
  @Input() actionUrl: string = '';
}
