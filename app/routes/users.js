'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.lookup = (req, res, next)=>{
  User.findById(req.session.userId, user=>{
    res.locals.user = user;
    next();
  });
};

exports.new = (req, res)=>{
  User.create(req.body, user=>{
    req.session.userId = user._id;
    res.redirect('/users/edit');
  });
};

exports.login = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users login');
  res.render('users/dash', {user: res.locals.user, title: 'Dashboard'});
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
  console.log('!!!!!!!!!!!!!!!!!!!!! users edit');
  res.render('users/edit', {user: res.locals.user, title: 'Edit Profile'});
};

exports.update = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users edit post');
  res.redirect('/users/dash');
};

exports.show = (req, res)=>{
  User.findById(req.params.id.toString(), user=>{
    res.render('users/show', {user: user, title: 'User Profile'});
  });
};

exports.top3matches = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users top3matches');
  res.render('users/top3matches', {});
};

exports.matches = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users matches');
  User.findById(res.locals.user._id, u=>{
    // Get this user's matches via their seeking array, returns all matches in
    // os, languages, and classification properties.
    u.match(u.seeking, (matches)=>{
      console.log(matches.length);
      console.log('done');

      res.render('users/matches', {user:res.locals.user, matches:matches, title:'Matches'});
    });
  });
};
