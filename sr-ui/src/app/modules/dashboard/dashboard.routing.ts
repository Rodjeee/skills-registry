import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';

export const DashboardRoutingModule: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    }
];