import { Component, OnInit } from '@angular/core';

interface Product {
  info: string;
  username: string;
  avatarUrl: string;
  date: string;
  amount: string;
  status: string; // "In Progress", "Complete", or "Pending"
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    const statuses = ['In Progress', 'Complete', 'Pending'];
    for (let i = 1; i <= 20; i++) {
      const product: Product = {
        info: `Product Info ${i}: Description for product ${i}`,
        username: `User${i}`,
        // Use a placeholder avatar image. You may replace this with a real image URL.
        avatarUrl: 'https://via.placeholder.com/30',
        date: this.randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
        amount: `$${(Math.random() * 100 + 20).toFixed(2)}`,
        status: statuses[Math.floor(Math.random() * statuses.length)]
      };
      this.products.push(product);
    }
  }

  // Returns a random date between start and end
  randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
