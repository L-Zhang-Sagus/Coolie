import { Component, OnInit } from "@angular/core";
import { MenuInterface } from "@common/interface"

@Component({
  templateUrl:'./lv.component.html',
  styleUrls:['./lv.component.scss'],
})
export class LvComponent implements OnInit{

  public menuList:MenuInterface[] = [
    {name:'Users', value: 'users', link:'/users'},
    {name:'Produits', value: 'produits', link:'/produits'},
    {name:'Operations', value: 'operations', link:'/operations'}
  ]

  ngOnInit(): void {

  }
}
