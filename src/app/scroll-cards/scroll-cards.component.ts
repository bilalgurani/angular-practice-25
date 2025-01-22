import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-scroll-cards',
  imports: [
    NgForOf
  ],
  templateUrl: './scroll-cards.component.html',
  styleUrl: './scroll-cards.component.scss'
})
export class ScrollCardsComponent implements OnInit, AfterViewInit {

  scrollListener: any;

  @ViewChild("stackArea") stackArea!: ElementRef;
  cardsArray: Array<any> = [
    {title: "Java", intro: "Have good experience in Java."},
    {title: "HTML", intro: "Have good experience in HTML."},
    {title: "Angular", intro: "Have good experience in Angular."},
    {title: "CSS and SCSS", intro: "Have good experience in CSS and SCSS."},
    {title: "JavaScript", intro: "Have good experience in JavaScript."}

  ];
  @ViewChildren("card") cards!: QueryList<ElementRef>;

  ngOnInit() {
    this.scrollListener = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  onScroll() {
    console.log('Scrolled!', window.scrollY);
    let distance = window.innerHeight/2;
    let topVal = this.stackArea.nativeElement.getBoundingClientRect().top;
    let index = -1 * (topVal / distance + 1);
    index = Math.floor(index);
    for (let i = 0; i < this.cards.length; i++) {
      if (i <= index) {
        this.cards.get(i)?.nativeElement.classList.add("away");
      } else {
        this.cards.get(i)?.nativeElement.classList.remove("away");
      }
    }
    this.rotateCards();
  }


  ngAfterViewInit(): void {
    this.rotateCards();
  }

  rotateCards() {
    let angle: number = 0;

    this.cards.forEach((card: ElementRef, index: number) => {
      if (card.nativeElement.classList.contains("away")) {
        card.nativeElement.style.transform = `translateY(-120vh) rotate(-48deg)`;
      } else {
        const element = card.nativeElement;
        element.style.transform = `rotate(${angle}deg)`;
        angle -= 10; // Adjust angle for each card
        element.style.zIndex = this.cards.length - index;
      }
    });
  }
}
