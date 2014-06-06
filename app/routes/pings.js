'use strict';

exports.index = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings index');
  res.render('pings/index', {title: 'Pings'});
};

exports.create = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings create');
  res.send({title: 'to be edited'});
};
