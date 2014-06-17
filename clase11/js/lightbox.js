$(document).on("ready", inicializar);

function inicializar(){
	$(".photos_list a").on("click", mostrarFoto);
}

function mostrarFoto(event){
	//alert("se deberia mostrar la foto");
	$("<div class='overlay'></div>").appendTo("body").css("opacity","0").animate({"opacity":".7"},"slow");

	$("<div id='lightbox'></div>").appendTo("body").hide();
	$("<img>",{src:$(this).attr("href")}).appendTo("#lightbox").on("load", posicionarFoto);
	$("<div id='close_btn'>X</div>").appendTo("#lightbox")
	.on("click", destruirLightbox);

	event.preventDefault();
}

function posicionarFoto(){
	var corX=($(window).width()-$("#lightbox").width())/2;
	var corY=($(window).height()-$("#lightbox").height())/2;

	$("#lightbox").css({"top":corY,"left":corX}).fadeIn();

}

function destruirLightbox(){
	$(".overlay, #lightbox").fadeOut(function(){
		$(this).remove();
	});
}