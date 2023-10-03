import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent implements OnInit {

  customer:any =[];
  constructor(private customerService:CustomerService, private activeRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById(){
    this.customerService.getCustomerById(this.activeRoute.snapshot.params['id'])
    .subscribe(res=>{
      console.log(res);
      this.customer=res;
    })
  }


}
