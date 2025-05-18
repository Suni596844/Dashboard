import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  templateUrl: './best-selling-products.component.html',
  styleUrls: ['./best-selling-products.component.scss']
})
export class BestSellingProductsComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  moveCount = 3;
  cardWidth = 0;
  totalCards = 0;

  ngAfterViewInit(): void {
    // Wait a tick for the view to render the product cards
    setTimeout(() => {
      const card = this.carousel.nativeElement.querySelector('.product-card') as HTMLElement;
      if (card) {
        this.cardWidth = card.offsetWidth;
      }
      this.totalCards = this.carousel.nativeElement.querySelectorAll('.product-card').length;
    });
  }

  goNext(): void {
    // If adding moveCount overshoots the total, reset to the beginning.
    if (this.currentIndex + this.moveCount >= this.totalCards) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += this.moveCount;
    }
    this.updateCarousel();
  }

  updateCarousel(): void {
    this.carousel.nativeElement.style.transform = `translateX(-${this.currentIndex * this.cardWidth}px)`;
  }
}
