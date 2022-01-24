import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { enpoints } from 'src/assets/api/api.enpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private http:HttpClient
  ){}
  ngOnInit(){
    this.http.get(enpoints.home._base).subscribe(res=>{
      console.log(res)
    })
  }
  title = 'front-coolie';
}
