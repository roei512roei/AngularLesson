import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCurrencyPipe } from '../../../shared/pipes/price-currency-pipe';
import { ProductService } from '../../../core/services/product';

export interface Product {
  name: string;
  price: number;
  category: string;
  available: boolean;
  
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,PriceCurrencyPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products : Product[]=[];

  constructor(private productService:ProductService){
    this.products=this.productService.getProducts();
  }

  hideProduct(prod: Product) {
    prod.available=false;
  }
  getProducts(){
    return this.productService;
  }
}

