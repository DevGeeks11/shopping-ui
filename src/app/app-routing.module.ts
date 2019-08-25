import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './website/user/signup/component/signup.component';
import { LoginComponent } from './website/user/login/component/login.component';
import { FrontPageComponent } from './website/front-page/front-page.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/frontPage'},
  {path:'frontPage', component: FrontPageComponent},
  {path:'signUp', component: SignupComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
