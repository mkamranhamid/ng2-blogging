import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginComponent } from './login/login.component';
import { navbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
    {
        path: '',
        component: loginComponent
    },
    {
        path: 'login',
        component: loginComponent
    },
    {
        path: 'navbar',
        component: navbarComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);