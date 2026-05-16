import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCurrencyPipe } from '../../../shared/pipes/price-currency-pipe';
import { ProductService } from '../../../core/services/product';
import { Router } from '@angular/router';

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

  constructor(private productService:ProductService, private router : Router){
    this.products=this.productService.getProducts()
    
  }

  hideProduct(prod: Product) {
    prod.available=false;
  }
  getProducts(){
    return this.productService;
  }
  viewDetails(name:string){
    this.router.navigate(["/productdetails",name]);
  }
}

