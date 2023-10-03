import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { Datepicker, Input, initTE } from 'tw-elements';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {



  constructor(private customerService: CustomerService, private router: Router) { }
  
  ngOnInit(): void {
    
  }
  
  addCustomerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    birthdate: new FormControl("", [Validators.required]),
    caddress: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    contactno: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required]),
    panno: new FormControl("", [Validators.required]),
    empoloyertype: new FormControl("", [Validators.required]),
    employername: new FormControl("")
  });

  customerSubmitted() {
    this.customerService.addNewCustomer({
      CustomerFirstName: this.addCustomerForm.value.firstname,
      CustomerLastName: this.addCustomerForm.value.lastname,
      CustomerBirthDate: this.addCustomerForm.value.birthdate,
      CustomerAddress: this.addCustomerForm.value.caddress,
      CustomerEmail: this.addCustomerForm.value.email,
      CustomerContactNo: this.addCustomerForm.value.contactno,
      CustomerSalary: this.addCustomerForm.value.salary,
      CustomerPanNo: this.addCustomerForm.value.panno,
      EmployerTypeId: this.addCustomerForm.value.empoloyertype,
      EmployerName: this.addCustomerForm.value.employername
    }).subscribe(res => {
      console.log(res);
      this.router.navigate(["/home"]);
    })
  }

  get fName(): FormControl {
    return this.addCustomerForm.get("firstname") as FormControl;
  }

  get lName(): FormControl {
    return this.addCustomerForm.get("lastname") as FormControl;
  }

  get cAddress(): FormControl {
    return this.addCustomerForm.get("caddress") as FormControl;
  }

  get birthDate(): FormControl {
    return this.addCustomerForm.get('birthdate') as FormControl;
  }

  get emailAddress(): FormControl {
    return this.addCustomerForm.get('email') as FormControl;
  }

  get contactNo(): FormControl{
    return this.addCustomerForm.get('contactno') as FormControl;
  }

  get salary(): FormControl{
    return this.addCustomerForm.get('salary') as FormControl;
  }

  get panno(): FormControl{
    return this.addCustomerForm.get('panno') as FormControl;
  }

  get empoloyertype(): FormControl{
    return this.addCustomerForm.get('empoloyertype') as FormControl;
  }

  get employername(): FormControl{
    return this.addCustomerForm.get('employername') as FormControl;
  }

}
