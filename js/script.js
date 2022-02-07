$(function(){
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling >50){
          $('.navbar').addClass('bg');
      }
      else{
        $('.navbar').removeClass('bg'); 
      }
    });

    var scrolling = $(this).scrollTop();
      if(scrolling >50){
          $('.navbar').addClass('bg');
      }
      else{
        $('.navbar').removeClass('bg'); 
      }
});

var username = document.getElementById('fname');
var fname_err = document.getElementById('fname_err');
var gmail = document.getElementById('gmail');
var gmail_err = document.getElementById('gmail_err');


var password = document.getElementById('pass');
var pass_err = document.getElementById('pass_err');
var date = document.getElementById('date');
var date_err = document.getElementById('date_err');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;
var spsl = /[#,@,%]/;

function sub(){
  if(username.value ==""){
    fname_err.innerHTML = "Give your name first";
    username.style.border ="3px solid red";
    username.focus();
    return false;
  }

  else if(gmail.value ==""){
    gmail_err.innerHTML = "Give your email address";
    gmail.style.border ="3px solid red";
    gmail.focus();
    return false;
  }

  

  

  else if(date.value ==""){
    date_err.innerHTML = "Give Reservation Date";
    date.style.border ="3px solid red";
    date.focus();
    return false;
  }

  else if(password.value ==""){
    pass_err.innerHTML = "Give your Party Number";
    pass.style.border ="3px solid red";
    pass.focus();
    return false;
  }

  // else if(!upper.test(password.value) ||!lower.test(password.value) ||!number.test(password.value)
  //  ||!spsl.test(password.value) ||password.value.length < 8 ){
  //   pass_err.innerHTML = "Give proper Party Number";
  //   pass.style.border ="3px solid red";
  //   pass.focus();
  //   return false;
  // }
}

function valid(){
  if(username.value !=""){
    fname_err.innerHTML = "";
    username.style.border ="3px solid green";
    
  }

  if(gmail.value !=""){
    gmail_err.innerHTML = "";
    gmail.style.border ="3px solid green";
    
  }

  if(date.value !=""){
    date_err.innerHTML = "";
    date.style.border ="3px solid green";
    
  }

  if(password.value !=""){
    pass_err.innerHTML = "";
    pass.style.border ="3px solid green";
    
  }

  
}

username.addEventListener('blur',valid);
gmail.addEventListener('blur',valid);
date.addEventListener('blur',valid);
password.addEventListener('blur',valid);