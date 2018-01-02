import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-other',
  templateUrl: './edit-other.component.html',
  styleUrls: ['./edit-other.component.css']
})
export class EditOtherComponent implements OnInit {
  current_user;
  being_editted_user = {
    first_name: "",
    last_name: "",
    location: ""
  };
  being_editted_id = {
    id: ""
  }
 

  password_update;
  passwordcon;

  error_message = {
    email: ""
  }
  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.current_user = this._service.user;
    if(localStorage.user == undefined) {
      this._router.navigate(['/'])
    }
    if(this.current_user.user_level != 9) {
      this._router.navigate(['/']);
      localStorage.removeItem("user");
    }
    this._route.paramMap.subscribe(params => {
      this._service.retrieveOneUser(params.get("id"), (res) => {
        this.being_editted_user = res;
        this.being_editted_id = res._id
        console.log("from edit other com oninit: ", this.being_editted_id);
      })
    })
  }

  //update other user by admin
  update_other() {
    this._service.update_other(this.being_editted_id, this.being_editted_user, (res) => {
      this._router.navigate(['dashboard']);
    })
  
  }

  update_otherpassword() {
    console.log("from com updatepassword: ", this.password_update);
    this._service.update_other_password(this.being_editted_id, this.password_update, 
      (res) => {
      console.log("from edit other com update password: success update", res);
    })
    this._router.navigate(['dashboard']);
    this.password_update = "";
  }

}











