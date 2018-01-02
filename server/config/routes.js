var dashboard = require('../controller/dashboard_controller.js');
var path = require('path');

module.exports = function(app){
  //register
  app.post("/register", function(req, res) {
    dashboard.register(req, res);
  })
  //login
  app.post("/login", function(req, res) {
    dashboard.login(req, res);
  })

  //retrieve All User
  app.get("/users", function(req, res) {
    dashboard.retrieveAllUsers(req, res);
  })

  //update user info
  app.put("/user/:id", function(req, res) {
    dashboard.update(req, res);
  })

  //update password
  app.put("/password/:id", function(req, res) {
    dashboard.updatepassword(req, res);
  })

  //add description
  app.put("/des/:id", function(req, res) {
    dashboard.add_des(req, res);
  })

  //delete user from dashboard
  app.delete("/user/:id", function(req, res) {
    dashboard.delete_user(req, res);
  })

  //retrieve one user
  app.get("/user/:id", function(req, res) {
    dashboard.retrieveOneUser(req, res);
  })

  //create new message
  app.post("/message/:target_id/:user_id", function(req, res) {
    dashboard.create_message(req, res);
  })

  //create comment
  app.post("/comment/:msg_id/:user_id", function(req, res) {
    dashboard.create_comment(req, res);
  })

  //delete message
  app.delete("/message/:id", function(req, res) {
    dashboard.delete_message(req, res);
  })

  //delete comment
  app.delete("/comment/:id", function(req, res) {
    dashboard.delete_comment(req, res);
  })

  //create event
  app.post("/user/:id/event", function(req, res) {
    dashboard.create_event(req, res);
  })

  //retrieve all events
  app.get("/event", function(req, res) {
    dashboard.retrieveAllEvent(req, res);
  })

  //delete an event
  app.delete("/event/:id", function(req, res) {
    dashboard.delete_event(req, res);
  })

  //user join an event
  app.post("/join/:event_id/:user_id", function(req, res) {
    dashboard.join_event(req, res);
  })

  //cancle join an event
  app.post("/cancle/:event_id/:user_id", function(req, res) {
    dashboard.cancle_join(req, res);
  })

  //retrieve one event
  app.get("/detail/:id", function(req, res) {
    dashboard.event_detail(req, res);
  })

  //retrieve all users except current log in user
  app.get("/allOtherUser/:user_id", function(req, res) {
    dashboard.allOtherUser(req, res);
  })

  //poke one user
  app.post("/poke/:current_user/:poked_user", function(req, res) {
    dashboard.poke(req, res);
  })

  //retrieve all the pokes about current user
  app.get("/allpoke/:id", function(req, res) {
    dashboard.allpoke(req, res);
  })




  app.all("*",function(req,res){
    res.sendFile('index.html', { root: './client/dist' });
  })






}
