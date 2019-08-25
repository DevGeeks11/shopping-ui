import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/apiEndpoints/customer.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent{
  title: string;
  loadLoginCmp: boolean;
  loadSignUpCmp: boolean;

  constructor(private customerServiceApi: CustomerService){
    this.title='Comfort';
    this.loadLoginCmp=false;
    this.loadSignUpCmp=false;
  }

  loadLoginComponent(){
    this.loadSignUpCmp = false;
    this.loadLoginCmp = true;
  }
  loadSignUpComponent(){
    this.loadLoginCmp = false;
    this.loadSignUpCmp = true;
  }
  loadHomeComponent(){
    this.loadLoginCmp = false;
    this.loadSignUpCmp=false;
  }
}
