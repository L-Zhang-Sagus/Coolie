import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/core/material.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
  exports: []
})
export class HomeModule {

}
