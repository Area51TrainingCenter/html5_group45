$(document).on("ready", inicializar);

function inicializar(){
	$(".menu a").on("mouseenter", sobrelinkmenu);
	$(".menu a").on("mouseleave", fueralinkmenu);
}

function sobrelinkmenu(){
	$(this).stop().animate({"width":"200px"},"slow");
}

function fueralinkmenu(){
	$(this).stop().animate({"width":"38px"},"slow");
}

