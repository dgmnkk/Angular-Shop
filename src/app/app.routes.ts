import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
    { path: "products", component: ProductsListComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
]
