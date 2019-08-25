import { Injectable } from '@angular/core';
import { CommonConstant } from '../../../../common/common-constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpComponentService {

  constructor( 
    private commonConstant: CommonConstant,
    private http: HttpClient
    ) {}

  public createCustomer(request: JSON){}
}
