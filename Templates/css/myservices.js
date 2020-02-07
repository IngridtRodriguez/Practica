//Preloader
var progress = setInterval(function () {
  var $bar = $("#bar");

  if ($bar.width() >= 600) {
      clearInterval(progress);
  } else {
      $bar.width($bar.width() + 60);
  }
  if ($bar.width() / 6 == 100){
    $bar.text("Still working ... " + $bar.width() / 6 + "%");
  }
}, 800);

$(window).load(function() {
  $("#bar").width(600);
  $(".loader").fadeOut(3000);
});

//Validation
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
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();