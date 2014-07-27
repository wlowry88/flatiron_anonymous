$(function(){
	$(".edit_form").hide();

  $(".edit_button").on('click', function(e){
  	e.preventDefault();
  	$(this).parent().next().next().slideToggle();	
  })
});