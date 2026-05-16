import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { OrderComponent } from './features/products/order-component/order-component';
import { DashboardComponent } from './features/products/dashboard-component/dashboard-component';
import { ProductDetailsComponent } from './features/products/product-details-component/product-details-component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    { path: 'orders', component: OrderComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'productdetails', component: ProductDetailsComponent }
];
