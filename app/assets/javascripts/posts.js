$(function(){
	$(".edit_form").hide();

	$(".full_content").hide();

  $(".edit_button").on('click', function(e){
  	e.preventDefault();
  	$(this).parent().next().next().next().slideToggle();	
  })

  $(".show_button").on('click', function(e){
  	e.preventDefault();
  	$(".preview_content").toggle();
  	$(this).parent().next().next().slideToggle();	
  })
});