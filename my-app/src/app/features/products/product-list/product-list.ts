import { Component } from '@angular/core';
interface Product{
  name: string;
  price: number;
  category: string;

}
@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products: Product[] = [
    {name:"Chair",price:100,category:"Decor"},
    {name:"Table",price:400,category:"Decor"},
    {name:"TV",price:1500,category:"Electronics"},
    {name:"Chandelier",price:800,category:"Decor"},
    {name:"Washing Machine",price:1000,category:"Electronics"},
  ]
}
