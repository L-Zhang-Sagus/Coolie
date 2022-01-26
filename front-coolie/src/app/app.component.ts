import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { enpoints } from 'src/assets/api/api.enpoints';
import { SidenavService } from './shared/sidenav/_service/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private http:HttpClient,
    private _sidenavService: SidenavService
  ){}
  ngOnInit(){
    this.http.get(enpoints.home._base).subscribe(res=>{
      console.log(res)
    })

    this._sidenavService.buttonSidenav = false;
  }
  title = 'front-coolie';
}
