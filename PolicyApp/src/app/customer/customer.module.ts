import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { CustomerService } from '../Services/customer.service';
import { GetCustomersComponent } from './get-customers/get-customers.component';
import { ViewCustomerDetailsComponent } from './view-customer-details/view-customer-details.component';


@NgModule({
  declarations: [
    AddCustomerComponent,
    GetCustomersComponent,
    ViewCustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AppModule, CustomerService]
})
export class CustomerModule { }
