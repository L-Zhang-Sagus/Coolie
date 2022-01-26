import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public openSidenav:Subject<boolean> = new Subject();
  public buttonSidenav = false;
}
