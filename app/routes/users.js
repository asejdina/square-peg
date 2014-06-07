'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');
var multiparty = require('multiparty');


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

exports.logout = (req, res)=>{
  req.session = null;
  delete req.session;
  res.redirect('/');
};

exports.login = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users login');
  User.login(req.body, user=>{
    if(user){
      req.session.userId = user._id;
      res.redirect('/users/dash');
    } else {
      req.session.userId = null;
      res.redirect('/');
    }
  });
};

exports.dash = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! users dash');
  res.render('users/dash', {user: res.locals.user, title: 'Dashboard'});
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
