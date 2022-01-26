import { Component, OnInit } from "@angular/core";
import { UserInterface } from "@common/interface";
import { SidenavService } from "src/app/shared/sidenav/_service/sidenav.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: UserInterface[] = [
    {email:'zl47895462@gmail.com', password:'123456'},
    {email:'zl47895462@gmail.com', password:'123456'},
    {email:'zl47895462@gmail.com', password:'123456'}
  ];
   constructor(
    private _sidenavService: SidenavService
  ){}

  ngOnInit(): void {
    this._sidenavService.buttonSidenav = true;
  }
}
