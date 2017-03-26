$(document).ready(function(){

    var sliderimages = $('ul li img');
	var slidersize = sliderimages.width()

	$('ul').wrap('<div id="slider" />');

	$('#slider').css({
		width: function() {
		return slidersize;
	  },
		height: function() {
		return sliderimages.height();
	  },
		position: 'relative',
		overflow: 'hidden'
	});

	var totalsize = sliderimages.length * slidersize;
	$('ul').css({
		width: function(){
		return totalsize;
	}
});

$(sliderimages).each(
  function(intIndex){
    $(this).nextAll('a')
  	.bind("click", function(){
  		if($(this).is(".next"))	{
  			$(this).parent('li').parent('ul').animate({
  				"margin-left": (-(intIndex + 1) * slidersize)
  					}, 1000)
  			} else if($(this).is(".previous")){
  			$(this).parent('li').parent('ul').animate({
  				"margin-left": (-(intIndex - 1) * slidersize)
  			}, 1000)
  			}
  	})
	});
});





