import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveModule } from './active/active.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeletedModule } from './deleted/deleted.module';

import { HomeComponent } from './home/home.component';
import { ManageModule } from './manage/manage.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManageModule,
    ActiveModule,
    DeletedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
