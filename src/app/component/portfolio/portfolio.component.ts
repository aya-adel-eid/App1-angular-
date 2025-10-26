import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-portfolio',
  imports: [TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: string[] = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
  ];
  flag: boolean = true;
  currentImage!: string;
  show(index: number): void {
    this.flag = false;
    this.currentImage = this.images[index];
    // console.log(this.currentImage);
  }
  clossImage(): void {
    this.flag = true;
  }
  stopClick(event: PointerEvent): void {
    event.stopPropagation();
    // console.log(event.target);
  }
}
