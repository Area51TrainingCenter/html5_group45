$(document).on("ready", inicializar);

function inicializar(){
	$(".photos_list a").colorbox({rel:"gallery", current:"Foto {current} de {total}"});
}