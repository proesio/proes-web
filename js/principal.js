//Desarrollado Por Juan Felipe Valencia Murillo.
var host=location.origin+'/proes/#!/';
$(document).ready(function(){
	setTimeout(function(){
	url=window.location+"";
	if(location.href==host){
		boton=document.getElementById("boton1");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	else if(location.href==host+'proyectos'){
		boton=document.getElementById("boton2");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	else if(location.href==host+'desarrollador'){
		boton=document.getElementById("boton3");
		boton.style.color="#5BC800";
		boton.style.borderTop="5px solid white";
		boton.style.borderBottom="5px solid #5BC800";
	}
	},300);
});
var botonVisitado=null;
function estiloClick(boton){
	if(botonVisitado){
		botonVisitado.style.color=null;
		botonVisitado.style.borderTop=null;
		botonVisitado.style.borderBottom=null;
	}
	botones=document.getElementsByTagName('button');
	for(i=0; i<botones.length; i++){
		botones[i].style.color=null;
		botones[i].style.borderTop=null;
		botones[i].style.borderBottom=null;
	}
	boton.style.color="#5BC800";
	boton.style.borderTop="5px solid white";
	boton.style.borderBottom="5px solid #5BC800";
	botonVisitado=boton;
}
function abrirModal(id_modal){
	modal=document.getElementById(id_modal);
	modal.style.display="block";
	window.onclick=function(event){
		if(event.target==modal){
			modal.style.display="none";
		}
	}
}
function cerrarModal(id_modal){
	modal=document.getElementById(id_modal);
	modal.style.display="none";
}