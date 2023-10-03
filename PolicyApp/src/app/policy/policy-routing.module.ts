import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { GetPolicyComponent } from './get-policy/get-policy.component';
import { ViewPolicyDetailsComponent } from './view-policy-details/view-policy-details.component';

const routes: Routes = [
  {
    path: 'add-new-policy',
    component: AddPolicyComponent
  },
  {
    path: 'get-policy',
    component: GetPolicyComponent
  },
  {
    path: 'policy-details/:id',
    component: ViewPolicyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
