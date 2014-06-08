'use strict';

exports.index = (req, res)=>{
  if(!req.session.userId){
    res.render('home/index', {user: res.locals.user, title: 'Node.js: Home'});
  }
  else{
    res.redirect('/users/dash');
  }
};
