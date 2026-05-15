import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list'
import { PriceCurrencyPipe } from './shared/pipes/price-currency-pipe';

@Component({
  selector: 'app-root',
  imports: [ProductList,PriceCurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
