import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeltUserComponent } from './delt-user/delt-user.component';



@NgModule({
  declarations: [
    DeltUserComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class DeletedModule { }
