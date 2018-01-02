import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event;
  user;
  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.user == undefined) {
      this._router.navigate(['/'])
    }
    this.user = this._service.user;
    this._route.paramMap.subscribe(params => {
      this._service.retrieveOneEvent(params.get("id"), (res) => {
        console.log("event detail service retrieve: ", res);
        this.event = res;
      })
    })
  }

  logout() {
    this._service.logout();
    this._router.navigate(['/']);
  }

}
