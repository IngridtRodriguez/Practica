//Preloader
function progress() {
  setInterval(function () {
    var $bar = $("#bar");
  
    if ($bar.width() >= 400) {
        clearInterval(progress);
    } else {
        $bar.width($bar.width() + 40);
    }
    if ($bar.width() / 4 == 100){
      $bar.text("Hey girl hey... " + $bar.width() / 4 + "%");
      start();
    }
  }, 800);
}

function start() {
  $(".loader").hide(); //fadeOut('fast');
}

$(window).on('load',function() {
  $("#bar").width(400);
  progress();
});

//Validation
/* $("#registerForm").validate();

jQuery.validator.setDefaults({
  errorElement: 'div',
  errorClass: 'invalid-feedback'
}) */

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else if((document.getElementById('contrasena').val != document.getElementById('confirmPswd').val)){
          document.getElementById('confirmPswd').setCustomValidity("Passwords must coincide");
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/* Visibilidad de contraseña*/
function passVisibility() {
  var x = document.getElementById("contrasena");
  if (x.type === "password") {
    x.type = "text";
    $("#eyeFont").addClass('fas fa-eye').removeClass('fa fa-eye-slash');
  } else {
    x.type = "password";
    $("#eyeFont").addClass('fa fa-eye-slash').removeClass('fas fa-eye');
  }
}

function passVisibility2() {
  var x = document.getElementById("confirmPswd");
  if (x.type === "password") {
    x.type = "text";
    $("#eyeFont2").addClass('fas fa-eye').removeClass('fa fa-eye-slash');
  } else {
    x.type = "password";
    $("#eyeFont2").addClass('fa fa-eye-slash').removeClass('fas fa-eye');
  }
}

/*Ejemplo
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
*/ 