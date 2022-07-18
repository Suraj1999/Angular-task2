import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delt-user',
  templateUrl: './delt-user.component.html',
  styleUrls: ['./delt-user.component.css']
})
export class DeltUserComponent implements OnInit {

  users:any;

  constructor(private userdata:UsersService) { 
    console.log(userdata.users());
    this.users = userdata.users();
  }

  active(item:any)
  {
    this.userdata.sendMsg(item);
  }

  ngOnInit(): void {
  }

}
