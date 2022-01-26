import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";

@NgModule({
  imports:[
    MaterialModule,
    CommonModule
  ],
  exports:[
    MaterialModule,
    CommonModule
  ]
})
export class CoreModule {

}
