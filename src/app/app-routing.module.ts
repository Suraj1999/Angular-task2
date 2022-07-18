import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUserComponent } from './active/active-user/active-user.component';
import { DeltUserComponent } from './deleted/delt-user/delt-user.component';
import { HomeComponent } from './home/home.component';
import { ManageUserComponent } from './manage/manage-user/manage-user.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"active",
    component:ActiveUserComponent
  },
  {
    path:"delete",
    component: DeltUserComponent
  },
  {
     path:"manage",
     component:ManageUserComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
