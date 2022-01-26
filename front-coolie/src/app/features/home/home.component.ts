import { Component, OnInit } from "@angular/core";
import { SidenavService } from "src/app/shared/sidenav/_service/sidenav.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    private _sidenavService: SidenavService
  ){}

  ngOnInit(): void {
      this._sidenavService.buttonSidenav=false;
  }
}
