//Desarrollado Por Juan Felipe Valencia Murillo.
Vue.component('pie-pagina',{
	mounted(){	
		this.posicionarFooter();
	},
	methods:{
		posicionarFooter(){
			setTimeout(function(){
				if(document.body.clientHeight<window.innerHeight){
					let footer=document.getElementsByTagName('footer')[0];
					let header=document.getElementsByTagName('header')[0];
					let contenido=document.getElementsByClassName('contenido')[0];
					footer.style.marginTop=(window.innerHeight-header.clientHeight-contenido.clientHeight-footer.clientHeight)+'px';
				}
				else{
					window.onscroll=(event)=>{
						let subir=document.getElementsByClassName('accion-subir')[0];
						let estado=window.scrollY>100 ? 'visible' : 'hidden';
						subir.style.visibility=estado;
					}
				}
			},100);
		},
		posicionarScrollY(x=0,y=0){
			if(window.scrollY) window.scroll(x,y);
		}
	},
	template:`
	<footer>
		<div class="accion-subir" @click="posicionarScrollY()"><i class="fas fa-chevron-up"></i></div>
		<div>
			<a href="https://www.facebook.com/proesio/" target="_blank"><i class="fab fa-facebook-f"></i></a>
			<!--<a href="https://www.facebook.com/juanfelipe.valencia.503" target="_blank"><i class="fab fa-instagram"></i></a>-->
		</div>
		<span>© Derechos de Autor 2018 - {{new Date().getFullYear()}} Juan Felipe Valencia Murillo</span>
	</footer>
	`
});