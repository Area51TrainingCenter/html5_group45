$(document).on("ready", inicializar);

function inicializar(){
	//window.setInterval(rotarImagenes, 5000);
	$("#prev_btn").on("click", anteriorImg);
	$("#next_btn").on("click", siguienteImg);
}

function siguienteImg(){
	$(".slideshow img").first().appendTo(".slideshow").hide().fadeIn();	
}

function anteriorImg(){
	$(".slideshow img").last().fadeOut(function(){
		$(this).prependTo(".slideshow").show();	
	});
}
