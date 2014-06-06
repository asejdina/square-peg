'use strict';

var bcrypt = require('bcrypt');
var users = global.nss.db.collection('users');
var Mongo = require('mongodb');
var traceur = require('traceur');
var Base = traceur.require(__dirname + '/base.js');

class User {

  static create(obj, fn){
    users.findOne({email:obj.email}, (err,user)=>{
      if(user) {
        fn(null);
      } else {
        user = new User();
        user._id = Mongo.ObjectID(obj._id);
        user.name = '';
        user.email = obj.email;
        user.password = bcrypt.hashSync(obj.password, 8);
        user.ip = '';
        user.primaryPhoto = null;
        user.photoGallery = [];
        user.bio = '';
        user.seeking = [];
        user.languages = [];
        user.os = '';
        user.classification = '';
        users.save(user, ()=>fn(user));
      }
    });
  }

  static login(obj, fn){
    users.findOne({email:obj.email}, (e,u)=>{
      if(u){
        var isMatch = bcrypt.compareSync(obj.password, u.password);
        if(isMatch){
          fn(u);
        }else{
          fn(null);
        }
      }else{
        fn(null);
      }
    });
  }

  static findById(id, fn){
    Base.findById(id, users, User, fn);
  }

  // update(obj, fn){
  //   users.save(this, ()=>());
  // }
}

module.exports = User;
