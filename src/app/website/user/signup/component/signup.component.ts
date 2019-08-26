import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerDTO } from '../../../../model/customer-dto.model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpCustomerData: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    this.signUpCustomerData = this.formBuilder.group({
      customerEmailId: ['', Validators.required],
      customerPassword: ['', Validators.required],
      customerMobileNumber: ['', Validators.required],
      customerGender: ['', Validators.required]
    });
  }
  createCustomer(customerDTO: CustomerDTO){
    console.debug(this.signUpCustomerData.value.customerEmailId);
  }
}
