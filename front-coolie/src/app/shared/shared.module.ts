import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { Sidenav } from "./sidenav/sidenav.component";

@NgModule({
  imports:[
    CoreModule
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
