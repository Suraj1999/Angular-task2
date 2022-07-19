import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserComponent } from './active-user/active-user.component';



@NgModule({
  declarations: [
    ActiveUserComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class ActiveModule { }
