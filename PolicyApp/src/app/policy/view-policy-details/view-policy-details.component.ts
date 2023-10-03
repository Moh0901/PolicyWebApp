import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PolicyService } from 'src/app/Services/policy.service';

@Component({
  selector: 'app-view-policy-details',
  templateUrl: './view-policy-details.component.html',
  styleUrls: ['./view-policy-details.component.css']
})
export class ViewPolicyDetailsComponent implements OnInit{

  policy:any =[];

  constructor(private policyService:PolicyService, private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.getPolicyById();
  }

  getPolicyById(){
    this.policyService.getPolicyById(this.activeRoute.snapshot.params['id'])
    .subscribe(res=>
      {
        this.policy=res;
        console.log(res);
      })
  }

}
