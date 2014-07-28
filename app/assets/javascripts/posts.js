$(document).ready(function() {
$(".edit_form").hide();
$(".new_form").hide();
  $(".full_content").hide();

  $(".edit_button").on('click', function(e){
  	e.preventDefault();
  	$(this).parent().next().next().next().slideToggle();	
  })

  $(".show_new_form").on('click', function(e){
    e.preventDefault();
    $(".new_form").slideToggle(); 
  });

  $(".show_button").on('click', function(e){
  	e.preventDefault();
  	$(this).parent().next().next().slideToggle();	
  	$(".preview_content").slideToggle();
  });
});