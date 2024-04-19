import { AfterViewInit, Component } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.components.css'],
})
export class AnimatedTextComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Wrap every letter in a span
    var textWrapper:any = document.querySelector('.animatedText');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.animatedText .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el:string, i:any) => 100 * (i + 1),
      })
      .add({
        targets: '.animatedText',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }
}
