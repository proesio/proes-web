/**
 * Este archivo es parte de la web PROES.
 * 
 * @author    Juan Felipe Valencia Murillo  <juanfe0245@gmail.com>
 * @copyright 2018 - presente  Juan Felipe Valencia Murillo
 */

Vue.component('encabezado', {
  data: () => ({
    host: DOMINIO,
    autorWeb: AUTOR_WEB
  }),
  mounted() {
    this.seleccionarBotonCargado();
  },
  methods: {
    seleccionarBotonCargado() {
      if (location.href == this.host) {
        this.asignarEstiloBoton(document.getElementById('inicio'));
      }

      if (location.href == `${this.host}proyectos`) {
        this.asignarEstiloBoton(document.getElementById('proyectos'));
      }

      if (location.href == `${this.host}desarrollador`) {
        this.asignarEstiloBoton(document.getElementById('desarrollador'));
      }
    },
    asignarEstiloBoton(btn) {
      btn.style.color = '#5BC800';
      btn.style.borderTop = '5px solid white';
      btn.style.borderBottom = '5px solid #5BC800';
    }
  },
  template: `
    <header>
      <div class="logo">
        <a :href="host"><img :src="host+'imagenes/proes-eslogan-transparente.png'" alt="ESLOGAN PROES" style="width:auto; height:50px; margin-top:10px;"/></a>
      </div>
      <div class="rutas">
        <a :href="host"><button id="inicio"><i class="fas fa-home"></i> Inicio</button></a>
        <a :href="host+'proyectos'"><button id="proyectos"><i class="fas fa-book"></i> Proyectos</button></a>
        <a :href="autorWeb" target="_blank"><button id="desarrollador"><i class="far fa-user"></i> Desarrollador</button></a>
      </div>
    </header>
  `
});

function abrirModal(modalId) {
  modal = document.getElementById(modalId);
  modal.style.display = 'block';
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

function cerrarModal(modalId) {
  modal = document.getElementById(modalId);
  modal.style.display = 'none';
}