import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {
  user;
  constructor(private _http: Http) {
    if (localStorage.user != undefined) {
      this.user = JSON.parse(localStorage.user);
    }
  }

  login(userdata, callback) {
    console.log(userdata);
    this._http.post("/login", userdata).subscribe(
      (res) => {
        callback(res.json());
        this.user = res.json();
        if (res.json().error == undefined) {
          this.user = res.json();
          console.log("from service login: ", this.user);
          localStorage.user = JSON.stringify(res.json());
        }
      },
      (err) => {
        console.log("error from login service: ", err);
      })
  }

  register(userdata, callback) {
    this._http.post("/register", userdata).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
        if (res.json().success == "success") {
          this.user = res.json().user;
          localStorage.user = JSON.stringify(res.json().user);
        }
      },
      (err) => {
        console.log("from service register error: ", err);
      }
    )
  }

  retrieveAllUser(callback) {
    this._http.get("/users").subscribe(
      (res) => {
        // console.log("from service retrieveAllUser: ", res);
        callback(res.json());
      })
  }

  //self-update info by user
  update(user, callback) {
    this._http.put("/user/" + this.user._id, user).subscribe((res) => {
      console.log("from update: ", res.json());
      this.user = res.json();
      localStorage.user = JSON.stringify(res.json());
      callback(res.json());
    })
  }

  //self-update password by user
  updatepassword(password, callback) {
    console.log("from service update password: ", password);
    this._http.put("/password/" + this.user._id, { password: password }).subscribe(
      (res) => {
        callback(res.json());
        this.user = res.json();
        localStorage.user = JSON.stringify(res.json());
      },
      (err) => {
        console.log("from service update password err: ", err);
      })
  }

  //self-add description by user
  add_description(des, callback) {
    this._http.put("/des/" + this.user._id, { des: des }).subscribe(
      (res) => {
        callback(res.json());
        this.user = res.json();
        localStorage.user = JSON.stringify(res.json());
      },
      (err) => {
        console.log("err from service add des: ", err);
      })
  }

  //add a new user by admin
  add_new(userdata, callback) {
    this._http.post("/register", userdata).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
      },
      (err) => {
        console.log("from service add_new error: ", err);
      }
    )
  }

  //delete a user by admin
  delete_user(id, callback) {
    this._http.delete("/user/" + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log("from service delete user: ", err);
      })
  }

  //retrieve one user in edit other component
  retrieveOneUser(id, callback) {
    this._http.get("/user/" + id).subscribe(
      (res) => {
        // console.log(res.json());
        callback(res.json())
      },
      (err) => {
        console.log("from service retrieveOneUser err: ", err);
      })
  }

  //update other user info by admin
  update_other(id, user, callback) {
    console.log("update other: ", user);
    this._http.put("/user/" + id, user).subscribe((res) => {
      callback(res.json());
    },
      (err) => {
        console.log("err from service update other: ", err);
      })
  }

  //update other user password by admin
  update_other_password(id, password, callback) {
    console.log("from service update password: ", password);
    this._http.put("/password/" + id, { password: password }).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log("from service update password err: ", err);
      })
  }

  create_message(message, target_id, callback) {
    this._http.post("/message/" + target_id + "/" + this.user._id, message).subscribe((res) => {
      console.log("from service create message: create success: ", res);
      callback(res.json());
    },
      (err) => {
        console.log("from service create message: error: ", err);
      })
  }

  create_comment(msg_id, comment, callback) {
    this._http.post("/comment/" + msg_id + "/" + this.user._id, comment).subscribe((res) => {
      console.log("from service create comment: create success");
      callback(res.json());
    },
      (err) => {
        console.log("from service create comment: error");
      })
  }

  delete_message(id, callback) {
    this._http.delete("/message/" + id).subscribe((res) => {
      callback(res.json());
    })
  }

  delete_comment(id, callback) {
    this._http.delete("/comment/" + id).subscribe((res) => {
      callback(res.json());
    })
  }

  create_event(event, callback) {
    this._http.post("/user/" + this.user._id + "/event", event).subscribe(
      (res) => {
        console.log("from service create event: ", res.json());
        callback(res.json())
      },
      (err) => {
        console.log("err from service create event: ", err);
      })
  }

  retrieveAllEvent(callback) {
    this._http.get("/event").subscribe(
      (res) => {
        console.log("from service retrieve events: ", res);
        callback(res.json())
      },
      (err) => {
        console.log("err from service retrieve events: ", err);
      })
  }

  delete_event(event_id, callback) {
    this._http.delete("/event/" + event_id).subscribe(
      (res) => {
        callback(res.json());
      }
    )
  }

  join_event(event_id, callback) {
    this._http.post("/join/" + event_id + "/" + this.user._id, {}).subscribe(
      (res) => {
        console.log("join event from service: ", res);
        callback(res.json());
      })
  }

  cancle_join(event_id, callback) {
    this._http.post("/cancle/" + event_id + "/" + this.user._id, {}).subscribe(
      (res) => {
        console.log("cancle join from service: ", res);
        callback(res.json());
      }
    )
  }

  retrieveOneEvent(event_id, callback) {
    this._http.get("/detail/" + event_id).subscribe(
      (res) => {
        callback(res.json());
      })
  }

  retrieveAllOtherUser(callback) {
    // console.log(this.user._id);
    this._http.get("/allOtherUser/" + this.user._id).subscribe((res) => {
      callback(res.json());
    })
  }

  poke(user_id, callback) {
    this._http.post("/poke/" + this.user._id + "/" + user_id, {}).subscribe((res) => {
      callback(res.json());
    })
  }

  getMyPoke(callback) {
    this._http.get("/allpoke/" + this.user._id).subscribe(
      (res) => {
        callback(res.json());
    })
  }

  logout() {
    localStorage.removeItem("user");
  }

}









