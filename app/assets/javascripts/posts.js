$(document).ready(function() {
  $(".edit_form").hide();
  $(".new_form").hide();
  $(".full_content").hide();
  $(".comments_ul").hide();

  $(".edit_button").on('click', function(e){
  	e.preventDefault();
  	$(this).parent().next().next().next().slideToggle();	
  })


  $(".comment_show").on('click', function(e){
    e.preventDefault();
    $(this).next("ul").slideToggle();
  })

  $(".show_new_form").on('click', function(e){
    e.preventDefault();
    $(".new_form").slideToggle(); 
  });

  $(".show_button").on('click', function(e){
  	e.preventDefault();
  	$(this).parent().next().next().slideToggle();	
  	$(this).parent().next().slideToggle();
  });
});