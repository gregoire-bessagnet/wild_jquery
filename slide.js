$(document).ready(function(){

var images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg'];

jQuery.each( images, function(i, val) {
		$("#slider").append("<img src=" + val + ">")
});

var $carrousel = $('#slider'), 
    $img = $('#slider img'), 
    indexImg = $img.length - 1, 
    i = 0, 
    $currentImg = $img.eq(i);

$img.css('display', 'none'); 
$currentImg.css('display', 'block'); 

$carrousel.wrap('<div class="controls"> <span class="prev  glyphicon glyphicon-circle-arrow-left"></span> <span class="next glyphicon glyphicon-circle-arrow-right"></span> </div>');

$('.next').click(function(){ 

    i++; 

    if( i <= indexImg ){
        $img.css('display', 'none'); 
        $currentImg = $img.eq(i); 
        $currentImg.css('display', 'block');
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){

    i--; 

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});


function slideImg(){
    setTimeout(function(){ 
						
        if (i < indexImg){ 
	    	i++; 
	}
	else { 
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg();

    }, 3000);
}

slideImg(); 

});





