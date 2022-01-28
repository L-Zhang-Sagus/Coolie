import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "src/app/core/core.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
  exports: []
})
export class HomeModule {

}
