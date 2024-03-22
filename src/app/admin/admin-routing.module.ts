import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
// import { UpdateUserComponent } from 'D:/Development/Checkout/Angular Exercise/second-app/src/app/admin/update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
