import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PolicyService } from 'src/app/Services/policy.service';


@Component({
  selector: 'app-get-policy',
  templateUrl: './get-policy.component.html',
  styleUrls: ['./get-policy.component.css']
})
export class GetPolicyComponent implements OnInit{

  allPolicy: any=[];
  policy:any []=[];

  constructor(private policyService:PolicyService){}

  ngOnInit(): void {
   this.getAllPolicy();
    // this.searchPolicyByValue();
  }

    filterForm = new FormGroup({
      policyId: new FormControl(""),
      policyName: new FormControl(""),
      policyCompany:new FormControl(""),
      policyTypeName:new FormControl(""),
      numberOfYears:new FormControl("")
    });

  getAllPolicy(){
    this.policyService.getAllPolicy().subscribe(res=>{
      this.allPolicy=res;
      console.log(res);
    })
  }

  searchPolicyByValue(){
    this.policyService.searchPolicy(this.filterForm.value.policyId,this.filterForm.value.policyName,this.filterForm.value.policyTypeName, this.filterForm.value.policyCompany, this.filterForm.value.numberOfYears)
    .subscribe((res:any)=>{
      console.log(res);
      this.allPolicy = res;
    });
  }

}
