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
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() == false)
          {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();