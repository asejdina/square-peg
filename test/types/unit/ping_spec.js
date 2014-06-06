/* global describe, it, before, beforeEach */
/* jshint expr:true */

'use strict';

process.env.DBNAME = 'square-peg-test';

var expect = require('chai').expect;
//var Mongo = require('mongodb');
var traceur = require('traceur');
var db = traceur.require(__dirname + '/../../helpers/db.js');
//var factory = traceur.require(__dirname + '/../../helpers/factory.js');

var Ping;

describe('Ping', function(){
  before(function(done){
    db(function(){
      Ping = traceur.require(__dirname + '/../../../app/models/ping.js');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.collection('pings').drop(function(){
      done();
    });
  });

  describe('.create', function(){
    it('should create a message', function(done){
      done();
    });
  });




















});
