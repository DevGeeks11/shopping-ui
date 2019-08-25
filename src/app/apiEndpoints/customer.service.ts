import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerDTO } from '../model/customer-dto';
import {CommonConstant} from '../common/common-constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  saveCustomerUrl: string  = CommonConstant.baseUrl+"/customer-service/saveCustomer";
  constructor(private httpCLient: HttpClient) { }

  public saveCustomer(customer: CustomerDTO){
    return this.httpCLient.post(this.saveCustomerUrl,customer);
  }
}
