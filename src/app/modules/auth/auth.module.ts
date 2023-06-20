import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing';

import { SignInComponent } from 'src/app/pages/sign-in/sign-in.page';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SignUpComponent,
    SignInComponent
  ]
})
export class AuthModule { }
