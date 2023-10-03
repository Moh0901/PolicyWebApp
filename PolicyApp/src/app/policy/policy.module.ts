import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { GetPolicyComponent } from './get-policy/get-policy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPolicyDetailsComponent } from './view-policy-details/view-policy-details.component';
import { AppModule } from '../app.module';
import { PolicyService } from '../Services/policy.service';


@NgModule({
  declarations: [
    AddPolicyComponent,
    GetPolicyComponent,
    ViewPolicyDetailsComponent
  ],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AppModule, PolicyService]
})
export class PolicyModule { }
