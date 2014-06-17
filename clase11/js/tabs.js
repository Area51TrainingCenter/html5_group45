$(document).on("ready", inicializar);

function inicializar(){
	$(".area").css('display','none');
	$('.tabs_list a').on('click', mostrarArea).first().trigger('click');
}

function mostrarArea(){
	$(this).addClass("active").parent().siblings().find('a').removeClass("active");
	var destino=$(this).attr('href');

	$(destino).show().siblings().hide();
}