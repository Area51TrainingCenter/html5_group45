$(document).on('ready', inicializar);

function inicializar(){
	$('.menu a').on('click', abrirSubMenu);
	$('.faqList dd').css('display','none');
	$('.faqList dt').on('click', mostrarRespuesta).last().trigger('click');
}

function abrirSubMenu(){
	var enlaceClikeado=$(this);
	enlaceClikeado.next().fadeIn().parent().on('mouseleave',function(){
		$(this).find('.submenu').fadeOut();
	});
}

function mostrarRespuesta(){
	$(this).siblings('dd').slideUp();

	if($(this).next().is(':visible')){
		$(this).next().slideUp();
	}else{
		$(this).next().slideDown();
	}
	
}