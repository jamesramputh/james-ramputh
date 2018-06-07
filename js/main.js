document.addEventListener('DOMContentLoaded', function(){
  $(".loader-overlay").show();

  setTimeout(function(){
    $(".loader-overlay").fadeOut();
    $(".full-page-container").fadeIn();
    $("header").removeClass("on-load");
  }, 1500);


});
