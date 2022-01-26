import { Component, OnInit } from "@angular/core";
import { SidenavService } from "src/app/shared/sidenav/_service/sidenav.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
   constructor(
    private _sidenavService: SidenavService
  ){}

  ngOnInit(): void {
    this._sidenavService.buttonSidenav = true;
  }
}
