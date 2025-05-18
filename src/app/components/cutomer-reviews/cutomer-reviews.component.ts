import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent {
  reviews = [
    { id: 1, message: "Excellent service and product quality!", reviewer: "John Doe" }
  ];
}
