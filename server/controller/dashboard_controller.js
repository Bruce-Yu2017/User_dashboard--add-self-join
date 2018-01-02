var mongoose = require("mongoose");
var path = require("path");
var User = mongoose.model("User");
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");
var Event = mongoose.model("Event");
var Poke = mongoose.model("Poke");
var scrypt = require("scrypt");
var scryptParameters = scrypt.paramsSync(0.1);

module.exports = {
  register: function (req, res) {
    User.find({}, function (err, users) {
      if (err) {
        console.log("from controller register findall: ", err);
      }
      else {
        if (users.length == 0) {
          var unhash_password = scrypt.kdfSync(req.body.password, scryptParameters).toString('Base64');
          console.log("hasded password: ", unhash_password);
          var admin = new User({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            location: req.body.location,
            password: unhash_password
          });
          admin.user_level = 9;
          admin.poked_total = 0;
          admin.save(function (err) {
            if (err) {
              console.log("from register controller: save normal user error");
            }
            else {
              res.json({ success: "success", user: admin });
            }
          })
        }
        else {
          User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
              console.log("from register controller: register normal user error");
            }
            else {
              if (user == null) {
                var unhash_pass = scrypt.kdfSync(req.body.password, scryptParameters).toString('Base64');

                var normal_user = new User({
                  email: req.body.email,
                  first_name: req.body.first_name,
                  last_name: req.body.last_name,
                  location: req.body.location,
                  password: unhash_pass
                });
                normal_user.user_level = 0;
                normal_user.poked_total = 0;
                normal_user.save(function (err) {
                  if (err) {
                    console.log("from register controller: save normal user error: ", err);
                  }
                  else {
                    res.json({ success: "success", user: normal_user });
                  }
                })
              }
              else {
                res.json("from register controller res: email existed")
              }
            }
          })
        }
      }
    })
  },

  login: function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) {
        console.log("error from login controller: ", err);
      }
      else {
        if (user == null) {
          res.json({ error: "email invalid" })
        }
        else {
          var unhash_password = scrypt.verifyKdfSync(new Buffer(user.password, 'Base64'), req.body.password);
          console.log("unhash_password: ", unhash_password);
          if (unhash_password == true) {
            res.json(user)
          }
          else {
            res.json({ error: "password is not correct" })
          }
        }
      }
    })
  },

  retrieveAllUsers: function (req, res) {
    User.find({}).exec(function (err, users) {
      if (err) {
        console.log("err from controller retrieveAllUsers: ", err);
      }
      else {
        // console.log("retrieveAllUsers from controller: ", users);
        res.json(users);
      }
    })
  },

//update info by user-self and by admin by this function
update: function (req, res) {
  User.findByIdAndUpdate({ _id: req.params.id },
    { $set: {first_name: req.body.first_name, last_name: req.body.last_name, location: req.body.location } }, function (err, update_user) {
      if (err) {
        console.log("err from udate self: ", err);
      }
      else {
        console.log("update self success", update_user);
        res.json(update_user)
      }
    })
},


updatepassword: function (req, res) {
  console.log("from controller updatepassword: ", req.body.password);
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      console.log("from controller updatepassword: ", err);
    }
    else {
      var unhash_pass = scrypt.kdfSync(req.body.password, scryptParameters).toString('Base64');
      user.password = unhash_pass;
      user.save(function (err) {
        if (err) {
          console.log("from controller updatepassword after save: ", err);
        }
        else {
          res.json(user);
        }
      })
    }
  })
},

add_des: function (req, res) {
  console.log("from controller add des: ", req.body.des);
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      console.log("from controller add des: ", err);
    }
    else {
      user.description = req.body.des;
      user.save(function (err) {
        if (err) {
          console.log("from controller add des after save: ", err);
        }
        else {
          res.json(user);
        }
      })
    }
  })
},

delete_user: function (req, res) {
  User.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log("delete_user from controller err: ", err);
    }
    else {
      res.json("delete user from controller success")
    }
  })
},

//use nested populate to query data
//sample: https://stackoverflow.com/questions/19222520/populate-nested-array-in-mongoose 
retrieveOneUser: function (req, res) {
  User.findOne({ _id: req.params.id }).populate({ path: "_receive_messages", populate: { path: "_poster" } }).exec(function (err, user) {
    var options = {
      path: "_receive_messages._comments",
      model: "Comment"
    };
    if (err) {
      console.log("err from retrieveAllMessage: ", err);
    }
    else {
      User.populate(user, options, function (err, user2) {
        var option2 = {
          path: "_receive_messages._comments._poster",
          model: "User"
        }
        User.populate(user2, option2, function (err, user3) {
          // console.log("user3", user3._receive_messages[0]._comments[0]);
          // console.log("this,", user3._receive_messages[0]._comments[0]);
          res.json(user3);
        })
      })
    }
  })
},

create_message: function (req, res) {
  var target_id = req.params.target_id;
  var user_id = req.params.user_id;
  var message = new Message(req.body);
  //add message into receiver as his _receive_messages
  User.findOne({ _id: target_id }, function (err, target_user) {
    message._receiver = target_user._id;
    message.save(function (err) {
      if (err) {
        console.log("create_message for receiver err before save");
      }
      else {
        target_user._receive_messages.push(message);
        target_user.save(function (err) {
          if (err) {
            console.log("target_user save error: ", err);
          }
          else {
            console.log("add message into target_user success");
            res.json("create message success")
            User.findOne({ _id: user_id }, function (err, poster) {
              message._poster = user_id;
              message.save(function (err) {
                if (err) {
                  console.log("create_message for poster err before save");
                }
                else {
                  poster._post_messages.push(message);
                  poster.save(function (err) {
                    if (err) {
                      console.log("poster save error");
                    }
                    else {
                      console.log("add message into poster success");
                    }
                  })
                }
              })
            })
          }
        })
      }
    })
  })
  //add message into poster as his _post_messages

},


create_comment: function (req, res) {
  var msg_id = req.params.msg_id;
  var current_user = req.params.user_id;
  var comment = new Comment(req.body);
  Message.findOne({ _id: msg_id }, function (err, message) {
    comment._message = message._id;
    comment.save(function (err) {
      if (err) {
        console.log("save comment err: ");
      }
      else {
        message._comments.push(comment);
        message.save(function (err) {
          if (err) {
            console.log("save message err when create comment");
          }
          else {
            User.findOne({ _id: current_user }, function (err, comment_poster) {
              comment._poster = comment_poster._id;
              comment.save(function (err) {
                if (err) {
                  console.log("save comment err with comment poster");
                }
                else {
                  comment_poster._post_comments.push(comment);
                  comment_poster.save(function (err) {
                    if (err) {
                      console.log("save comment poster err with comment");
                    }
                    else {
                      console.log("create comment success");
                    }
                  })
                }
              })
            })
          }
        })
      }
    })

  })


},

delete_message: function (req, res) {
  Message.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log("delete message err: ", err);
    }
    else {
      res.json("delete message success")
    }
  })
},

delete_comment: function (req, res) {
  Comment.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log("delete comment err: ", err);
    }
    else {
      res.json("delete comment success")
    }
  })
},

create_event: function (req, res) {
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      console.log("err from create event find user: ", err);
    }
    else {
      var event = new Event(req.body);
      event._event_poster = user._id;
      // event._users_joined.push(user);
      event.save(function (err) {
        if (err) {
          console.log("err from create even after save event: ", err);
        }
        else {
          user._created_events.push(event);
          // user._joined_events.push(event);
          user.save(function (err) {
            if (err) {
              console.log("err from create even after save user: ", err);
            }
            else {
              // res.redirect("/event")
              console.log("success create event");
              res.json("success create event")
            }
          })
        }
      })
    }
  })
},

retrieveAllEvent: function (req, res) {
  Event.find({}).populate("_event_poster").exec(function (err, events) {
    if (err) {
      console.log("err from retrieve all events: ", err);
    }
    else {
      res.json(events);

    }
  })
},

delete_event: function (req, res) {
  var event_id = req.params.id;
  Event.remove({ _id: event_id }, function (err) {
    if (err) {
      console.log("delete event err: ", err);
    }
    else {
      console.log("delete event success");
      res.json("delete event success")
    }
  })
},

join_event: function (req, res) {
  var event_id = req.params.event_id;
  var user_id = req.params.user_id;
  Event.findOne({ _id: event_id }, function (err, event) {
    if (err) {
      console.log("err from join event: ", err);
    }
    else {
      event._users_joined.push(user_id);
      event.save(function (err) {
        if (err) {
          console.log("err from join event after save: ", err);
        }
        else {
          console.log("join success");
          res.json("join success")
        }
      })
    }
  })
},

cancle_join: function (req, res) {
  var event_id = req.params.event_id;
  var user_id = req.params.user_id;
  Event.findOne({ _id: event_id }, function (err, event) {
    if (err) {
      console.log("err from cancle join before save: ", err);
    }
    else {
      var arr = event._users_joined;
      var index = arr.indexOf(user_id);
      arr.splice(index, 1);
      event.save(function (err) {
        if (err) {
          console.log("err from cancle join after save: ", err);
        }
        else {
          console.log("cancle join success");
          res.json("cancle join success");
        }
      })
    }
  })
},

event_detail: function(req, res) {
  Event.findOne({_id: req.params.id}).populate("_event_poster").populate("_users_joined").exec(function(err, event) {
    if(err) {
      console.log("retrieve one event err: ", err);
    }
    else {
      res.json(event);
      console.log("retrieve one event success: ", event);
    }
  })
},

allOtherUser: function(req, res) {
  var user_id = req.params.user_id;
  console.log(user_id);
  User.find({_id: {$nin: user_id}}).exec(function(err, users) {
    if(err) {
      console.log("err from retrieve all other users: ", err);
    }
    else {
      res.json(users);
    }
  })
},

poke: function(req, res) {
  var current_user = req.params.current_user;
  var poked_user = req.params.poked_user;
  User.findOne({_id: poked_user}, function(err, poked) {
    poked.poked_total += 1;
    poked.save(function(err) {
      if(err) {
        console.log("err from save poked: ", err);
      }
      else {
        User.findOne({_id: current_user}, function(err, current) {
          // console.log("find current user: ", current);
          Poke.findOne({$and: [{_from_user: current}, {_to_user: poked}]}, function(err, poke) {
            if(poke == null) {
              var poke = new Poke();
              poke._from_user = current._id;
              poke._to_user = poked._id;
              poke.num_of_pokes = 1;
              poke.save(function(err) {
                if(err) {
                  console.log("create new poke err: ", err);
                }
                else {
                  console.log("create new poke success");
                  res.json("create new poke success")
                }
              })
            }
            else {
              poke.num_of_pokes += 1;
              poke.save(function(err) {
                if(err) {
                  console.log("create new poke err: ", err);
                }
                else {
                  console.log("create new poke success");
                  res.json("create new poke success")
                }
              })
            }
          })
          

          
        })
      }
    })
  })
},

allpoke: function(req, res) {
  var current_user = req.params.id;
  Poke.find({_to_user: current_user}).populate("_from_user").exec(function(err, pokes) {
    if(err) {
      console.log("err from find poke: ", err);
    }
    else {
      res.json(pokes);
      console.log("show all pokes about current user success: ", pokes);
    }
  })
}


}












