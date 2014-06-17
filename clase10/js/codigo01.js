// alert("sdfssfd");
var enlacesMenu=document.querySelectorAll(".menu a");

for (var i = 0; i < enlacesMenu.length; i++) {
	//enlacesMenu[i].style.backgroundColor="#000";
	enlacesMenu[i].onmouseenter=pintarBoton;
	enlacesMenu[i].onmouseleave=despintarBoton;
	enlacesMenu[i].onclick=seleccionar;
	// alert("jkkj");
};

function seleccionar(e){
	//this.style.backgroundColor="#000";
	var todosLosEnlaces=document.querySelectorAll(".menu a");

	for (var i = 0; i < todosLosEnlaces.length; i++) {
		todosLosEnlaces[i].classList.remove("selected");
	};

	this.classList.add("selected");


	var hrefdestino=this.hash.substr(1);

	var objetoDestino=document.getElementById(hrefdestino);
	
	var todasLasAreas=document.querySelectorAll(".area");

	for (var i = 0; i < todasLasAreas.length; i++) {
		todasLasAreas[i].style.opacity="0";
	};

	objetoDestino.style.opacity="1";
	
}

function pintarBoton(){
	//this.style.backgroundColor="#000";
	this.classList.add("hoverState");
}

function despintarBoton(){
	//this.style.backgroundColor="#000";
	this.classList.remove("hoverState");
}


