'use strict';

exports.index = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings index');
  res.render('pings/index', {title: 'Pings'});
};

exports.create = (req, res)=>{
  console.log('!!!!!!!!!!!!!!!!!!!!! pings create');
  //Ping.create(res.locals.user._id, req.params.toid,)
  res.send({title: 'to be edited'});
};
