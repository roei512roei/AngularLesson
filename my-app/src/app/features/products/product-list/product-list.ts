import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  category: string;
  available: boolean;
  
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
    { name: "Chair", price: 100, category: "Decor",available: true },
    { name: "Table", price: 400, category: "Decor",available: true },
    { name: "TV", price: 1500, category: "Electronics",available: false },
    { name: "Chandelier", price: 800, category: "Decor",available: true },
    { name: "Washing Machine", price: 1000, category: "Electronics",available: false },
  ];

  hideProduct(prod: Product) {
    prod.available=false;
  }

}

