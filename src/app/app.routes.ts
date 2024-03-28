import { Routes } from '@angular/router';
import { CreateUserComponent } from './admin/create-user/create-user.component';


export const routes: Routes = [

    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },{
        path:'create-user',
        loadComponent: () => import('./admin/create-user/create-user.component').then(c=>c.CreateUserComponent)
        // component:CreateUserComponent
    }
   
];
