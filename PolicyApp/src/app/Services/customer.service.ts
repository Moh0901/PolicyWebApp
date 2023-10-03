import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerAPIUrl = "https://localhost:7012/api/v1.0/customer/";
  constructor(private http:HttpClient) { }

  getAllCustomer(){
    return this.http.get(this.customerAPIUrl+"getall");
  }

  getCustomerById(id:number)
  {
    return this.http.get(this.customerAPIUrl+"getby/"+id);
  }

  addNewCustomer(customer:any){
    return this.http.post(this.customerAPIUrl+"register",customer);
  }
  
}
