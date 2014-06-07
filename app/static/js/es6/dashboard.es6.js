/* global ajax */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    getMatches();
    getPings();
    getMessageNumber();
  }

  function getMatches(){
    ajax(`/users/top3matches`, 'get', null, html=>{
      $('#topMatches').append(html);
    });
  }

  function getPings(){
    ajax(`/pings/:toId`, 'get', null, html=>{
      $('#ping').append(html);
    });
  }

  function getMessageNumber(){

  }



})();
