import { Injectable } from '@angular/core';
import {empty, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

emp = [
  {
    id: "User1", 
    firstName : "One",
    lastName : "User",
    age : 30,
    login : "user1.com",
    password : "123",
    isDeleted : false,
    showD : false,
  },
  {
    id: "User2", 
    firstName : "Two",
    lastName : "User",
    age : 30,
    login : "user2.com",
    password : "123",
    isDeleted : false,
    showD : false,
  },
  {
    id: "User3", 
    firstName : "Three",
    lastName : "User",
    age : 30,
    login : "user3.com",
    password : "123",
    isDeleted : true,
    showD : false,
  },
  {
    id: "User4", 
    firstName : "Four",
    lastName : "User",
    age : 30,
    login : "user4.com",
    password : "123",
    isDeleted : false,
    showD : false,
  },
  {
    id: "User5", 
    firstName : "Five",
    lastName : "User",
    age : 30,
    login : "user5.com",
    password : "123",
    isDeleted : false,
    showD : false,
  },
  {
    id: "User6", 
    firstName : "Six",
    lastName : "User",
    age : 30,
    login : "user6.com",
    password : "123",
    isDeleted : false,
    showD : false,
  },
  {
    id: "User7", 
    firstName : "Seven",
    lastName : "User",
    age : 30,
    login : "user7.com",
    password : "123",
    isDeleted : true,
    showD : false,
  },
  {
    id: "User8", 
    firstName : "Eight",
    lastName : "User",
    age : 30,
    login : "user8.com",
    password : "123",
    isDeleted : false,
    showD : false,
  },
  {
    id: "User9", 
    firstName : "Nine",
    lastName : "User",
    age : 30,
    login : "user9.com",
    password : "123",
    isDeleted : true,
    showD : false,
  }
];

private _isD = new Subject<any>();
isDelt = this._isD.asObservable();

sendMsg(val:any)
{
   if(val.isDeleted == false)
     {
      val.isDeleted = true;
     }
   else if(val.isDeleted == true)
     {
      val.isDeleted = false;
     }
this._isD.next(val);
}

showDet(item:any)
{
  if(item.showD == false)
    item.showD = true;
  else{
    item.showD = false;
  }
  this._isD.next(item);
}

  users(){
    return this.emp;  
  }




}
