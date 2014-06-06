'use strict';

exports.index = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! messages index');
  res.render('messages/index', {title: 'Messages'});
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
