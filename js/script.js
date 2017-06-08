$(document).ready(function(){
  //Current class assignement
  $('nav a').click(function(){
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');

  //set heading text
  $('h1#heading').text($(this).text());

  //Get and filter link text
  var category = $(this).text().toLowerCase().replace(' ', '-');

  //remove hidden class if "all projects" is selected
  if(category == 'all-projects'){
    $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
  } else {
    $('ul#gallery li').each(function(){
      if(!$(this).hasClass(category)){
        $(this).hide().addClass('hidden');
      } else {
        $(this).fadeIn('slow').removeClass('hidden');
      }
    })
  }
  //Stop link behaviour
  return false;



  });
});
