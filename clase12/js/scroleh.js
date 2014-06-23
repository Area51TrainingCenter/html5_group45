$(document).on("ready", inicializar);

function inicializar(){
	$(".menu a").on("click", irADestino);
	$(".menu a").on("mouseenter", sobrelinkmenu);
	$(".menu a").on("mouseleave", fueralinkmenu);
}

function irADestino(e){
	$(this).parent().addClass("active").siblings().removeClass('active');
	$(this).stop().animate({"width":"200px"},"slow").parent().siblings().find('a')
	.animate({"width":"38px"},"slow")

	var destino=$(this).attr("href");

	
	$(".container")
	.animate(
		{scrollLeft:$(destino).position().left}
		,"slow");

	$(".logo").addClass("salir");
	$(destino).find('.logo').removeClass("salir").addClass("entrar");
	/*if(!$(".logo").hasClass("entrar")){
				$(".logo").removeClass("salir")
				$(".logo").addClass("entrar")				
	}else{
		$(".logo").removeClass("entrar");
		$(".logo").addClass("salir");
	}*/

	e.preventDefault();

}
	

function sobrelinkmenu(){
	$(this).stop().animate({"width":"200px"},"slow");
}

function fueralinkmenu(){
	if(!$(this).parent().hasClass('active')){
		$(this).stop().animate({"width":"38px"},"slow");		
	}
}
