$(function () {
  
$('#overMobile').click(function (e) { 
  $('#mobileNav').removeClass('hidden');
  e.preventDefault();
  
});
$('#closeMobile').click(function (e) { 
    $('#mobileNav').addClass('hidden');
    e.preventDefault(); 
  
});
$("#login-button").click(function (e) { 
  $('#login-screen').removeClass('hidden')
  console.log('entered')
  e.preventDefault();
  
});

$("#login-button-existing").click(function (e) { 
    $("#modal-existing-user").removeClass('hidden')
    $("#modal-add-user").addClass('hidden')
    $("#modal-password-forgotten").addClass('hidden')
    $("#login-button-existing").addClass('login-modal-button-active')
    $("#login-button-add").removeClass('login-modal-button-active')
    $("#login-button-forgotten").removeClass('login-modal-button-active')

    console.log('existing user modal opened')
  e.preventDefault();
  
});
$("#login-button-add").click(function (e) { 
  $("#modal-add-user").removeClass('hidden')
  $("#modal-existing-user").addClass('hidden')
  $("#modal-password-forgotten").addClass('hidden')

  $("#login-button-add").addClass('login-modal-button-active')
  $("#login-button-forgotten").removeClass('login-modal-button-active')
  $("#login-button-existing").removeClass('login-modal-button-active').addClass('login-modal-button')

  console.log('new user modal opened')
  e.preventDefault();
  
});
$("#login-button-forgotten").click(function (e) { 
  $("#modal-password-forgotten").removeClass('hidden')
  $("#modal-add-user").addClass('hidden')
  $("#modal-existing-user").addClass('hidden')

  $("#login-button-existing").removeClass('login-modal-button-active').addClass('login-modal-button')
  $("#login-button-add").removeClass('login-modal-button-active')
  $("#login-button-forgotten").addClass('login-modal-button-active')

  console.log('password forgotten modal opened')
  e.preventDefault();
  
});

});