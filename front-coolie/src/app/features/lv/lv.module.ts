import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/core/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { IndexComponent } from "./index/index.component";
import { LvRoutingModule } from "./lv-routing.module";
import { LvComponent } from "./lv.component";
import { OperationsComponent } from "./operations/operations.component";
import { ProduitsComponent } from "./produits/produits.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  declarations:[
    LvComponent,
    IndexComponent,
    UsersComponent,
    ProduitsComponent,
    OperationsComponent
  ],
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
