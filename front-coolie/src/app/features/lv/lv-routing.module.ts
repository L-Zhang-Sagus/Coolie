import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { LvComponent } from "./lv.component";
import { OperationsComponent } from "./operations/operations.component";
import { ProduitsComponent } from "./produits/produits.component";
import { UsersComponent } from "./users/users.component";

const routes:Routes = [
  { path: '', component: LvComponent, children:[
    { path: '', component:  IndexComponent },
    { path: 'users', component: UsersComponent },
    { path: 'produits', component: ProduitsComponent },
    { path: 'operations', component: OperationsComponent }
  ] },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LvRoutingModule{

}
