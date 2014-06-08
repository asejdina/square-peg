'use strict';

var traceur = require('traceur');
var Ping = traceur.require(__dirname + '/../models/ping.js');

exports.index = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings index');
  Ping.findAllByToId(req.session.userId, pings=>{
    res.render('pings/index', {pings:pings, title: 'Pings'});
  });

};

exports.create = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings create');
  Ping.create(res.locals.user._id, req.params.toId, ping=>{
    res.send(ping);
  });
};
