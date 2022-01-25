import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material.module";
import { Sidenav } from "./sidenav/sidenav.component";

@NgModule({
  imports:[
    MaterialModule,
    CommonModule
  ],
  declarations:[
    Sidenav
  ],
  exports:[
    Sidenav
  ]
})
export class SharedModule{

}
