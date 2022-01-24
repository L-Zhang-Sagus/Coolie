import { NgModule } from "@angular/core";
import { LvRoutingModule } from "./lv-routing.module";
import { LvComponent } from "./lv.component";

@NgModule({
  declarations:[LvComponent],
  imports:[LvRoutingModule],
  providers:[],
  exports:[]
})
export class LvModule{

}
