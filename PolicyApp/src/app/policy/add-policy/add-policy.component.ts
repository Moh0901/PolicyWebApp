import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/Services/policy.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit{

  constructor(private policyService:PolicyService, private router:Router){}

  ngOnInit(): void { }

  addPolicyForm = new FormGroup({
    policyname: new FormControl("",[Validators.required]),
    startdate: new FormControl("",[Validators.required]),
    duration: new FormControl("",[Validators.required]),
    initialdeposit: new FormControl("",[Validators.required]),
    policytype: new FormControl("",[Validators.required]),
    usertype: new FormControl("",[Validators.required]),
    amount: new FormControl("",[Validators.required]),
    terms: new FormControl("",[Validators.required]),
    interest: new FormControl("",[Validators.required]),
    company: new FormControl("",[Validators.required])
  })

  onPolicySubmitted(){
    this.policyService.addNewPolicy({
      PolicyName: this.addPolicyForm.value.policyname,
      PolicyStartDate: this.addPolicyForm.value.startdate,
      PolicyDuration: this.addPolicyForm.value.duration,
      PolicyInitialDeposit: this.addPolicyForm.value.initialdeposit,
      PolicyTypeId: this.addPolicyForm.value.policytype,
      UserTypeId: this.addPolicyForm.value.usertype,
      PolicyInterest: this.addPolicyForm.value.interest,
      PolicyAmount: this.addPolicyForm.value.amount,
      PolicyTermsPerYear: this.addPolicyForm.value.terms,
      PolicyCompany: this.addPolicyForm.value.company
    }).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/policy/get-policy']);
   })
  }
}
