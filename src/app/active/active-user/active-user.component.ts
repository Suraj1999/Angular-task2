import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})

export class ActiveUserComponent implements OnInit {
 
  users:any;

  constructor(private userdata:UsersService) { 
    console.warn(userdata.users());
    this.users = userdata.users();

  }

  deAct(item:any){
    
    this.userdata.sendMsg(item);
  }

  ngOnInit(): void {
  }

}
