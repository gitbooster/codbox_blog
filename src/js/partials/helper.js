//Так приятней :)
window.log = function(param){
    console.log(param);
};




$('.aside_nav li a').click(function(){   
  $('.aside_nav li a').removeClass('nav_selected');
  $(this).addClass('nav_selected');
});