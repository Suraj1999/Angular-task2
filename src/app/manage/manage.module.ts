import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';



@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  
})
export class ManageModule { }
