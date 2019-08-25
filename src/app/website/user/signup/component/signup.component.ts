import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerDTO } from '../../../../model/customer-dto';

@Component({
  selector: 'app-user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  addCustomer: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    this.addCustomer = this.formBuilder.group({
      
    });
  }
  createCustomer(customerDTO: CustomerDTO){

  }
}
