import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { ContactComponent } from './contact';
import { MenuComponent } from './menu';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MenuComponent },
    { path: 'contacts', component: ContactComponent },
    { path: '**', redirectTo: '404' },
    { path: '404', component: NoContentComponent }
];