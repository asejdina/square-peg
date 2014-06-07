'use strict';

var traceur = require('traceur');
var Message = traceur.require(__dirname + '/../models/message.js');

exports.index = (req, res)=>{
  // var testToId = '1567356789abcdef01234569'; for testing purposes replace req.session.userId with this var
  Message.findAllByToId(req.session.userId, messages=>{
    res.render('messages/index', {messages:messages, title: 'Inbox'});
  });
};

exports.destroy = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! messages destroy');
  res.render('messages/msg_list', {});
};

exports.new = (req, res)=>{
  res.render('messages/new', {toId: req.params.toId, title: 'Create New Message'});
};

exports.create = (req, res)=>{
  // var rsu = '1567356789abcdef01234569'; for testing purposes replace req.session.userId with this var
  Message.create(req.session.userId, req.params.toId, req.body, message=>{
    console.log(message);
    res.redirect('/users/dash');
  });
};
