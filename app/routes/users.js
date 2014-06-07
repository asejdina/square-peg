'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');
var multiparty = require('multiparty');


exports.login = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users login');
  res.render('users/dash', {title: 'Dashboard'});
};

exports.new = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users new');
  res.redirect('/users/edit');
};

exports.lookup = (req, res, next)=>{
  User.findById(req.session.userId, user=>{
    res.locals.user = user;
    next();
  });
};

exports.dash = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users dash');
  res.render('users/dash', {title: 'Dashboard'});
};

exports.edit = (req, res)=>{
  res.render('users/edit', {user:res.locals.user, title: 'Edit Profile'});
};

exports.update = (req, res)=>{
  var form = new multiparty.Form();
  var user = res.locals.user;

  form.parse(req, (err, fields, files)=>{
    user.update(fields, files);
      user.save(()=>{
        res.redirect('/users/dash');
      });
    });
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
