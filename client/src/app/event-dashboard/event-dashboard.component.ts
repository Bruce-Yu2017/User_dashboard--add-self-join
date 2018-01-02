import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit {
  user;
  today = new Date();
  tomorrow = this.today.setDate(this.today.getDate() + 1);

  event = {
    name: "",
    date: "",
    location: ""
  }
  allevents;



  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    if (localStorage.user == undefined) {
      this._router.navigate(['/'])
    }
    this.user = this._service.user;
    this._service.retrieveAllEvent((res) => {
      console.log("from event dash com oninit: ", res);
      this.allevents = res;
    })
  }

  create_event() {
    this._service.create_event(this.event, (res) => {
      this._service.retrieveAllEvent((res) => {
        console.log("from event dash com oninit: ", res);
        this.allevents = res;
      })
    })
    this.event = {
      name: "",
      date: "",
      location: ""
    }



    

  }

  delete(event_id) {
    this._service.delete_event(event_id, (res) => {
      console.log("delete event success: ", res);
      this._service.retrieveAllEvent((res) => {
        console.log("from event dash com oninit: ", res);
        this.allevents = res;
      })
    })
  }

  join(event_id) {
    this._service.join_event(event_id, (res) => {
      console.log("join event success: ", res);
      this._service.retrieveAllEvent((res) => {
        console.log("from event dash com oninit: ", res);
        this.allevents = res;
      })
    })
  }

  cancle_join(event_id) {
    this._service.cancle_join(event_id, (res) => {
      console.log("cancle join success: ", res);
      this._service.retrieveAllEvent((res) => {
        console.log("from event dash com oninit: ", res);
        this.allevents = res;
      })
    })
  }

  logout() {
    this._service.logout();
    this._router.navigate(['/']);
  }

}















