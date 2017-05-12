//Так приятней :)
window.log = function(param){
    console.log(param);
};



// asie link active
$('.aside_nav li a').click(function(){   
  $('.aside_nav li a').removeClass('nav_selected');
  $(this).addClass('nav_selected');
});

// change views mod on news
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();
    $('#products .item').removeClass('grid-group-item');
    $('#products .item').addClass('list-groups-item');});
    
    $('#grid').click(function(event){event.preventDefault();
    $('#products .item').removeClass('list-groups-item');
    $('#products .item').addClass('grid-group-item');});
});