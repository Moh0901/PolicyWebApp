import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthGuard/auth.guard';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetCustomersComponent } from './get-customers/get-customers.component';
import { ViewCustomerDetailsComponent } from './view-customer-details/view-customer-details.component';

const routes: Routes = [
  { 
    path:'add-new-customer',
    component: AddCustomerComponent
  },
  {
    path:'get-customer',
    component:GetCustomersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'customer-details/:id',
    component: ViewCustomerDetailsComponent,
    canActivate:[AuthGuard]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
