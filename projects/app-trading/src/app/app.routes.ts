import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AccionesComponent } from './pages/acciones.component';
import { CarteraComponent } from './pages/cartera.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'acciones', component: AccionesComponent },
	{ path: 'cartera', component: CarteraComponent }
];
