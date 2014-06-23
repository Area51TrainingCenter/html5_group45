$(document).on("ready", inicializar);

function inicializar(){
	$("#btn_enviar").on("click", validar);
}

function validar(e){
	$("[type='text']").each(function(){
		if(!$(this).val().length){
			$(this).css("border-color","red"); // solo le pongo el borde de color rojo
			e.preventDefault(); // no le habia puesto los parentesis ¬¬
		}else{
			$(this).removeAttr("style");  // remuevo el color rojo de los que no están vacios
		}
	});
	
}