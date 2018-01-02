import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {
  user;
  allusers;
  my_poke;
  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.user == undefined) {
      this._router.navigate(['/'])
    }
    this.user = this._service.user;
    this._service.retrieveAllOtherUser((res) => {
      console.log("retrieve all other users from poke com: ", res);
      this.allusers = res;
    })
    this._service.getMyPoke((res) => {
      console.log("get my poke from poke com: ", res);
      this.my_poke = res;
    })
  }

  poke(user_id) {
    this._service.poke(user_id, (res) => {
      console.log(res);
      this._service.retrieveAllOtherUser((res) => {
        console.log("retrieve all other users from poke com: ", res);
        this.allusers = res;
      })
    })

  }

  logout() {
    this._service.logout();
    this._router.navigate(['/']);
  }

}












