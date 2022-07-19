import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})


export class ManageUserComponent implements OnInit {

users:any

  constructor(private userdata:UsersService) {
    console.warn("userdata",userdata.users());
    this.users = userdata.users();
   }

   showDetail:any = false;

show(item:any){
  this.userdata.showDet(item);
}

  ngOnInit(): void {
  }

}
