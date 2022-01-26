import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SidenavService } from "../shared/sidenav/_service/sidenav.service";

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  private sidenav = false;

  constructor(
    public _sidenavService: SidenavService
  ){}

  ngOnInit(): void {
    this._sidenavService.openSidenav.next(this.sidenav);
    this._sidenavService.openSidenav.subscribe(opened=>{
      this.sidenav = opened
    })
  }

  onOpenSidnav(){
    this.sidenav = !this.sidenav;
    this._sidenavService.openSidenav.next(this.sidenav);
  }

}
