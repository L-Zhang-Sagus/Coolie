import { Injectable, OnInit } from "@angular/core";
import { UserInterface } from "@common/interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  private readonly users: UserInterface[] = [
    {id:'1', email:'zl47895462@gmail.com', password:'123456'},
    {id:'2', email:'zl47895462@gmail.com', password:'123456'},
    {id:'3', email:'zl47895462@gmail.com', password:'123456'}
  ];

  constructor(){}

  ngOnInit(): void {

  }

  onGetUsers(){
    return this.users;
  }

  onGetUser(id: string){
    return this.users.filter(user=> user.id = id)
  }

}
