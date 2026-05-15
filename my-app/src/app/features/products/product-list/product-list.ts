import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {

  products: Product[] = [
    { name: "Chair", price: 100, category: "Decor" },
    { name: "Table", price: 400, category: "Decor" },
    { name: "TV", price: 1500, category: "Electronics" },
    { name: "Chandelier", price: 800, category: "Decor" },
    { name: "Washing Machine", price: 1000, category: "Electronics" },
  ];

}