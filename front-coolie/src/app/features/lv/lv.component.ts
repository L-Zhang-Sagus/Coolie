import { Component, OnInit } from "@angular/core";
import { MenuInterface } from "@common/interface"
import { SidenavService } from "src/app/shared/sidenav/_service/sidenav.service";

@Component({
  templateUrl:'./lv.component.html',
  styleUrls:['./lv.component.scss'],
})
export class LvComponent implements OnInit{

  public menuList:MenuInterface[] = [
    {name:'Users', value: 'users', link:'/lv/users'},
    {name:'Produits', value: 'produits', link:'/lv/produits'},
    {name:'Operations', value: 'operations', link:'/lv/operations'}
  ]

  constructor(
    private _sidenavService: SidenavService
  ){}

  ngOnInit(): void {
    this._sidenavService.openSidenav.next(false)
  }
}
