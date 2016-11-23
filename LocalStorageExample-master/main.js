$(document).ready(function(){

  var $color_button = $('.color-changer');

  function changeColor(event){
    var color = $(event.target).data('color');
    $('html').removeClass();
    $('html').addClass(color);
    $('html').css("background-color", color);
    window.localStorage.setItem("bg-color", color);
  }


  function loadDefaultColor(){
    if (window.localStorage.getItem("bg-color")){
      var savedColor = window.localStorage.getItem("bg-color");
      $("html").css("background-color",savedColor);
    }
  }
  loadDefaultColor();
  $color_button.on("click",changeColor);
});
