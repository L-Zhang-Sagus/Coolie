import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserInterface } from "@common/interface";

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  public email:string = "";
  public password:string = "";

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  ngOnInit() {
      this.email = "cool@google.com";
  }

  addUser(form:NgForm){
    console.log(form.value)
  }

  goBack(){
    this._router.navigate(['/lv/user'], {relativeTo: this._route})
  }

}
