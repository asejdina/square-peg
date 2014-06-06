'use strict';

exports.login = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users login');
  res.render('users/dash', {title: 'Dashboard'});
};

exports.new = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users new');
  res.redirect('/users/edit');
};

exports.dash = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users dash');
  res.render('users/dash', {title: 'Dashboard'});
};

exports.edit = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users edit');
  res.render('users/edit', {title: 'Edit Profile'});
};

exports.update = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users edit post');
  res.redirect('/users/dash');
};

exports.show = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users show');
  res.render('users/show', {title: 'User Profile'});
};

exports.top3matches = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users top3matches');
  res.render('users/top3matches', {});
};

exports.matches = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users matches');
  res.render('users/matches', {title:'Matches'});
};
