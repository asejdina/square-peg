/* jshint unused: false */
// global functions
/* global ajax */



(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    //alert('loaded');
    $('#ping').click(ping);
  }

  function ping(){
    var toId = $('#user').attr('data-id');

    ajax(`/pings/${toId}`, 'post', null, html=>{
      console.log(html);
      $('#ping').addClass('pinged');
    }, 'json');

  }

})();
