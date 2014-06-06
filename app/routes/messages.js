'use strict';

var traceur = require('traceur');
var Message = traceur.require(__dirname + '/../models/message.js');

exports.index = (req, res)=>{
  Message.findAllByToId(req.session.userId, messages=>{
    res.render('messages/index', {messages:messages, title: 'Inbox'});
  });
};

exports.destroy = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! messages destroy');
  res.render('messages/msg_list', {});
};

exports.new = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! messages new');
  res.render('messages/new', {title: 'Create New Message'});
};

exports.create = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! messages create');
  res.redirect('/users/dash');
};
