import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  policyAPIUrl = "https://localhost:7012/api/v1.0/policy/";

  constructor(private http: HttpClient) { }

 // https://localhost:7012/api/v1.0/policy/getall

  getAllPolicy(){
    return this.http.get(this.policyAPIUrl+"getall");
  }

  getPolicyById(id:number){
    return this.http.get(this.policyAPIUrl+"getById/"+id);
  }

  addNewPolicy(policy:any){
    return this.http.post(this.policyAPIUrl+"register/",policy);
  }

  searchPolicy(policyId:any,policyName:any,policyTypeName:any,policyCompany:any,numberOfYears:any){
    return this.http.get
    (this.policyAPIUrl+`searches?PolicyId=${policyId}&PolicyName=${policyName}&PolicyTypeName=${policyTypeName}&PolicyCompany=${policyCompany}&NumberOfYears=${numberOfYears}`);
  }

}
