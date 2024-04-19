import { Component } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  customOptions: any = {
    loop: true,
    margin: 20,
    autoplay:true,
    autoplayHoverPause: true,
    responsiveClass: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    rtl:true,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2
     },
      940: {
       items: 3
     }
    },
   nav: true
  }

  meals: any[] = [
    {
      id: 1,
      title: 'مسفوف تونسي',
      category: "السحور",
      image: 'assets/imgs/masfouf.jpeg',
      description:  'مسفوف تونسي'
    },
    {
      id: 2,
      title: 'مسفوف تونسي',
      category: "الإفطار",
      image: 'assets/imgs/smoothie.jpg',
      description:
        'الشوفان مع عصير مخفوق (سموثي) مكوّن من اللبن قليل الدسم والفاكهة الطازجة',
    },
    {
      id: 3,
      title: 'حساء تونسي',
      category: "الإفطار",
      image: 'assets/imgs/soupe.jpg',
      description: 'حساء'
    },
    {
      id: 4,
      title: 'ملسوقة',
      category: "الإفطار",
      image: 'assets/imgs/brique.jpg',
      description: 'ملسوقة'
    },
  ];
}
