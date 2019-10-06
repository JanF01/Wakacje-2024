
$(document).ready(function(){


  $('.mobilek').mouseover(function(){
       $('.mobileul').css('display','flex');

  });
  $('.mobilek').mouseout(function(){
	$('.mobileul').css('display','none');

});



});


function widen(t){
	$("#ab"+t).css("width","90%");
}
function shrink(t){
	$("#ab"+t).css("width","0em");
}