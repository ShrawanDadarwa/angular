import { Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';

// export const routes: Routes = [{path: '/login', component: LoginComponent}];
export const routes: Routes = [
    {path:"login",loadChildren:()=>import('./user-auth/user-auth.module').then(m => m.UserAuthModule)},
    {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m => m.AdminModule)}
];