import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LvComponent } from "./lv.component";

const routes:Routes = [
  {path: '', component:LvComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LvRoutingModule{

}
