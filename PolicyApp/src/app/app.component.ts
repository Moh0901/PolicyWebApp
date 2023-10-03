import { Component } from '@angular/core';
import { CustomerService } from './Services/customer.service';
import { PolicyService } from './Services/policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PolicyApp';

  allCustomers:any;
  allpolicy: any;

  constructor(private customerService: CustomerService, private policyService:PolicyService){}
  ngOnInit()
  {
    // this.getAllCustomers();
   //this.getAllPolicy();
  }
  // getAllCustomers()
  // {
  //   this.customerService.getAllCustomer().subscribe(res=>{
  //     this.allCustomers = res;
  //     console.log(res);
  //   });
  //}

  // getAllPolicy()
  // {
  //   this.policyService.getAllPolicy().subscribe(re=>{
  //     this.allpolicy = re;
  //     console.log(re);
      
  //   });
  // }
}
