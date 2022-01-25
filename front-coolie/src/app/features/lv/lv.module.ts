import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/core/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { LvRoutingModule } from "./lv-routing.module";
import { LvComponent } from "./lv.component";

@NgModule({
  declarations:[LvComponent],
  imports:[
    LvRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers:[],
  exports:[]
})
export class LvModule{

}
