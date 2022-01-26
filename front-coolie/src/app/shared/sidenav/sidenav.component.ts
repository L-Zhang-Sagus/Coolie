import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private _sidenavService: SidenavService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this._sidenavService.buttonSidenav = true;
    this.drawar.opened = false;
    this._sidenavService.openSidenav.subscribe(sidenavOpened=>{
      this.drawar.opened = sidenavOpened;
    });
  }

  changePages(link:string){
    this._router.navigate([link])
  }

}
