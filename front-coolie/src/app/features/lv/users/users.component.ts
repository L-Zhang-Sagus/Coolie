import { Component, OnInit } from "@angular/core";
import { UserInterface } from "@common/interface";
import { SidenavService } from "src/app/shared/sidenav/_service/sidenav.service";
import { UsersService } from "./_service/users.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: UserInterface[] = [];
   constructor(
    private _sidenavService: SidenavService,
    private _usersService: UsersService
  ){}

  ngOnInit(): void {
    this._sidenavService.buttonSidenav = true;
    this.getUsers()
  }

  getUsers(){
    this.users = this._usersService.onGetUsers()
  }
}
