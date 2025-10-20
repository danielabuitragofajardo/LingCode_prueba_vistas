import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Mision } from './mision/mision';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'mision', component: Mision}
];
