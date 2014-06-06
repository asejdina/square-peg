'use strict';

var bcrypt = require('bcrypt');
var users = global.nss.db.collection('users');
var Mongo = require('mongodb');
var traceur = require('traceur');
var Base = traceur.require(__dirname + '/base.js');
var fs = require('fs');
var path = require('path');

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
        user.isCreated = false;
        user.ipAddress = '';
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

  save(fn) {
    users.save(this, ()=>fn());
  }

  update(fields, files){
    if(fields && typeof(fields.name) !== 'undefined') {
      console.log(fields);
      if(!this.isCreated) {
        this.isCreated = true;
      }
      this.name = fields.name[0];
      this.ipAddress = fields.ipAddress[0];
      this.bio = fields.bio[0];
      this.seeking = fields.seeking[0];
      this.languages = fields.languages[0];
      this.os = fields.os[0];
      this.classification = fields.classification[0];
      this.primaryPhoto = `/img/${this._id.toString()}/${files.photo[0].originalFilename}`;
      var userDir = `${__dirname}/../static/img/${this._id.toString()}`;
      userDir = path.normalize(userDir);
      this.primaryPhotoPath = `${userDir}/${files.photo[0].originalFilename}`;
      if(!fs.existsSync(userDir)){
        fs.mkdirSync(userDir);
      }
      fs.renameSync(files.photo[0].path, this.primaryPhotoPath);
    }
  }
}

module.exports = User;
