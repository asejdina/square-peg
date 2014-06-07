'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var users = traceur.require(__dirname + '/../routes/users.js');
  var messages = traceur.require(__dirname + '/../routes/messages.js');
  var pings = traceur.require(__dirname + '/../routes/pings.js');

  app.all('*', users.lookup);

  app.get('/', dbg, home.index);

  app.post('/users/login', dbg, users.login);
  app.post('/users/new', dbg, users.new);
  app.get('/users/dash', dbg, users.dash);
  app.get('/users/edit',dbg, users.edit);
  app.post('/users/edit',dbg, users.update);
  app.get('/users/:id/show', dbg, users.show);
  app.get('/users/top3matches', dbg, users.top3matches);
  app.get('/users/matches', dbg, users.matches);

  app.get('/messages/inbox', dbg, messages.index);
  app.post('/messages/:msgId', dbg, messages.destroy);
  app.get('/messages/new/:toId', dbg, messages.new);
  app.post('/messages/new/:toId', dbg, messages.create);

  app.get('/pings/:toId', dbg, pings.index);
  app.post('/pings/:toId', dbg, pings.create);

  console.log('Routes Loaded');
  fn();
}
