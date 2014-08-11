$(document).ready(function() {
  $(".edit_form").hide();
  $(".new_post_form").hide();
  $(".full_content").hide();
  $(".comments_ul").hide();

  $("#posts_div").on('click', ".edit_button",function(e){
  	e.preventDefault();
  	$(this).parent().parent().find(".edit_form").slideToggle();
  })

  $("#posts_div").on('click', ".comment_show", function(e){
    e.preventDefault();
    $(this).parent().find(".comments_ul").slideToggle();
  })

  $(".show_new_form").on('click', function(e){
    e.preventDefault();
    $(".new_post_form").slideToggle(); 
  });

  $("#posts_div").on('click', ".show_button", function(e){
  	e.preventDefault();
  	$(this).closest("div").find(".full_content").slideToggle();	
  	$(this).closest("div").find(".preview_content").slideToggle()
  });
});