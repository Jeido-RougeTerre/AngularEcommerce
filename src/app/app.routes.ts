import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PanierComponent } from './pages/panier/panier.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "admin", component: AdminComponent},
    {path: "panier", component: PanierComponent}
];
