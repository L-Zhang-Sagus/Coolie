import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { IndexComponent } from "./index/index.component";
import { LvRoutingModule } from "./lv-routing.module";
import { LvComponent } from "./lv.component";
import { OperationsComponent } from "./operations/operations.component";
import { ProduitsComponent } from "./produits/produits.component";
import { EditComponent } from "./users/editUser/edit.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  declarations:[
    LvComponent,
    IndexComponent,
    UsersComponent,
    ProduitsComponent,
    OperationsComponent,
    EditComponent
  ],
  imports:[
    LvRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers:[],
  exports:[]
})
export class LvModule{

}
