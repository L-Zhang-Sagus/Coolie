import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private baseUrl = environment.baseUrl;
  constructor(
    private http:HttpClient
  ){}
  ngOnInit(){
    this.http.get(this.baseUrl).subscribe(res=>{
      console.log(res)
    })
  }
  title = 'front-coolie';
}
