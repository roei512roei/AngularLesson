import { Injectable } from '@angular/core';
import { Product } from '../../features/products/product-list/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { name: "Chair", price: 100, category: "Decor",available: true },
    { name: "Table", price: 400, category: "Decor",available: true },
    { name: "TV", price: 1500, category: "Electronics",available: false },
    { name: "Chandelier", price: 800, category: "Decor",available: true },
    { name: "Washing Machine", price: 1000, category: "Electronics",available: false },
  ];
  constructor(){};
  
  getProducts(){
    return this.products;
  }
}
