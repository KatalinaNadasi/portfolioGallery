$(document).ready(function(){
  //Current class assignement
  $('nav a').click(function(){
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');
  });

  //set heading text
  $('h1#heading').text($(this).text());
})
