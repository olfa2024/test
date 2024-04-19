import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-salima',
  templateUrl: './salima.component.html',
  styleUrls: ['./salima.component.css']
})
export class SalimaComponent {
   @Input() mainTitle: string = '';
  @Input() subTitle: string = '';
  @Input() imgUrl: string = 'assets/imgs/salima.jpeg';
  @Input() action: string = '';
  @Input() actionUrl: string = '';

}
