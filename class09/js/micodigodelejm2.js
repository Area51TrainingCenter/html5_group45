var boton1=document.getElementById("calcBtn");
var boton2=document.getElementById("hiBtn");
var boton3=document.getElementById("cambioBtn");
var boton4=document.getElementById("fondo1Btn");
var boton5=document.getElementById("fondo2Btn");
var boton6=document.getElementById("fondo3Btn");
var combo1=document.getElementById("cfondo");
var posteos=document.getElementsByClassName("post");

var pos;

for(pos=0; pos<posteos.length; pos++){
	posteos[pos].onclick=pintarDeRojo;
}

boton1.onclick=calcular;
boton2.onclick=saludar;
boton2.onclick=calcularDolares;
boton4.onclick=cambiarFondo1;
boton5.onclick=cambiarFondo1;
boton6.onclick=cambiarFondo1;
combo1.onchange=cambiarFondo2;

function saludar(){
	alert("Hola a todos");
}

function calcular(){
	var num1=Number(prompt("Ingrese el primer número"));
	var num2=Number(prompt("Ingrese el segundo número"));
	var ope=prompt("Ingrese el operador");
	var resultado;
	if(ope=="+"){
		resultado=num1+num2;
	}else if(ope=="-"){
		resultado=num1-num2;
	}else if(ope=="*"){
		resultado=num1*num2;
	}
	alert("El resultado de la operacion es: "+resultado);
}

function calcularDolares(){
	var num1=Number(prompt("Ingrese el Tipo de Cambio"));
	var num2=Number(prompt("Ingrese la cantidad en Dolares"));
	var conversion=num2*num1;
	alert("Tu dinero en soles es:" + conversion);
}

function cambiarFondo1(){
	var cuerpo=document.body;
	// alert(this.id);
	if(this.id=="fondo1Btn"){
		cuerpo.style.backgroundColor="#ff0";		
	}else if(this.id=="fondo2Btn"){
		cuerpo.style.backgroundColor="#0f0";		
	}else if(this.id=="fondo3Btn"){
		cuerpo.style.backgroundColor="#f00";		
	};

}


function cambiarFondo2(){
	var cuerpo=document.body;
	// alert(this.id);
	if(this.value=="1"){
		cuerpo.style.backgroundColor="#ff0";		
	}else if(this.value=="2"){
		cuerpo.style.backgroundColor="#0f0";		
	}else if(this.value=="3"){
		cuerpo.style.backgroundColor="#f00";		
	};

}

function pintarDeRojo(){
	this.style.backgroundColor="#f00";
}