import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse , initTE } from 'tw-elements';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  jwt:any = localStorage.getItem("jwt");
  role:any=localStorage.getItem("role")

  constructor(private router:Router){}
  ngOnInit(): void {
    initTE({ Collapse });
  }
  logout=()=>{
    localStorage.clear();
    this.router.navigate([""]);
    setTimeout(function(){window.location.reload(); }, 100);
  }
 
}
