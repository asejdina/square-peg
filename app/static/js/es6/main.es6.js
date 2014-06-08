/* jshint unused: false */
// global functions
/* exported ajax */
function ajax(url, type, data={}, success=r=>console.log(r), dataType='html'){
  'use strict';
  $.ajax({url:url, type:type, dataType:dataType, data:data, success:success});
}


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    //alert('loaded');
    $('#modal').hide();
    $('#show-login').click(showModalLogin);
    $('#show-register').click(showModalRegister);
    $('#getstarted').click(showModalRegister);
    $('#form-register').hide();
    $('#btn-register').click(showRegister);
    $('#btn-login').click(showLogin);
    $('.boxclose').click(closeBox);
    $('#ping').click(ping);
  }

  function ping(){
    var toId = $('#user').attr('data-id');

    ajax(`/pings/${toId}`, 'post', null, html=>{
      console.log(html);
      $('#ping').addClass('pinged');
    }, 'json');

  }

  function showModalLogin(){
    $('#modal').fadeIn();
  }

  function showModalRegister(){
    $('#modal').fadeIn();
    showRegister();
  }

  function closeBox(){
    $('#modal').fadeOut();
  }

  function showRegister(){
    $('#btn-register').addClass('btn-selected disableClick');
    $('#btn-login').removeClass('btn-selected disableClick');
    $('#form-login').hide();
    $('#form-register').fadeToggle();

  }

  function showLogin(){
    $('#btn-login').addClass('btn-selected disableClick');
    $('#btn-register').removeClass('btn-selected disableClick');
    $('#form-register').hide();
    $('#form-login').fadeToggle();
  }


})();
