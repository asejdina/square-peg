'use strict';

var traceur = require('traceur');
var Message = traceur.require(__dirname + '/../models/message.js');

exports.index = (req, res)=>{
  Message.findAllByToId(req.session.userId, messages=>{
    res.render('messages/index', {messages:messages, title: 'Inbox'});
  });
};

// exports.new = (req, res)=>{
//   res.render('messages/new', {title: 'New Message'});
// };
//
// exports.create = (req, res)=>{
//
// };
//
// exports.destroy = (req, res)=>{
//   res.redirect('users/dash');
// };
