'use strict';

var traceur = require('traceur');
var Ping = traceur.require(__dirname + '/../models/ping.js');

exports.index = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings index');
  Ping.findAllByToId(req.session.userid, pings=>{
    res.render('pings/index', {pings:pings, title: 'Pings'});
  });

};

exports.create = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings create');
  res.send({title: 'to be edited'});
};
