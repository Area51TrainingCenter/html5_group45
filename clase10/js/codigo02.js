$(document).on('ready', inicializar);

function inicializar(){
	//alert("jquery funciona!!!!");
	var todosLosEnlaces=$(".menu a");

	todosLosEnlaces.on('click', seleccionar);
}

function seleccionar(){
	var todosLosEnlaces=$(".menu a");

	todosLosEnlaces.removeClass("selected");

	var enlaceClikeado=$(this);

	enlaceClikeado.addClass('selected');

	var destino=enlaceClikeado.attr('href');

	$('.area').css('opacity','0');
	$(destino).css('opacity','1');
}