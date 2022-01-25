import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MenuInterface } from "@common/interface"
import { SidenavService } from "./_service/sidenav.service";

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class Sidenav implements OnInit{

  @ViewChild('drawer', {static: true}) drawar: any;
  @Input() menuList:MenuInterface[] = [];

  constructor(
    private _sidenavService: SidenavService
  ) {

  }

  ngOnInit(): void {
    this._sidenavService.buttonSidenav = true;
    this._sidenavService.openSidenav.subscribe(sidenavOpened=>{
      this.drawar.opened = sidenavOpened;
    });
    console.log(this.menuList)
  }


}
