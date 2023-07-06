<template>
  <div class="container">
    <div v-if="juegoActivo">
      <h1 v-if="!pokemonCorrecto">Espere por favor!</h1>
      <div v-else>
        <h1>Juego Pokemon</h1>
        <Image :pokemonId="pokemonCorrecto.id" 
        :muestraPokemon="showPokemon" />
        <Option
          :opciones="pokemonArr"
          @seleccionado="revisarSeleccion($event)"
        />

        <div class="puntajes">
          <p>Puntaje: {{ puntaje }}</p>
          <p>Intentos:{{ intentos }}</p>
        </div>

        <div>
          <button v-if="mostrarSiguiente" 
          @click="reiniciar">Reiniciar</button>
        </div>
      </div>
    </div>

    <div v-if="ganador">
      <h2>Felicidades, has ganado el juego</h2>
    </div>

    <div v-if="perdedor">
      <h2>Game over</h2>
    </div>
  </div>
</template>

<script>
import Image from "../components/PokemonImg.vue";
import Option from "../components/pokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientPokemonApi";

export default {
  components: {
    Image,
    Option,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      showPokemon: false,

      ////
      puntaje: 0,
      intentos: 0,
      mostrarSiguiente: false,
      ganador: false,
      perdedor: false,
      juegoActivo: true,
    };
  },
  mounted() {
    this.cargaJuegoInicial();
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.pokemonArr = arregloPokemons;
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
      this.showPokemon = false;
      this.mostrarSiguiente = false;
      console.log("cargando inicial")
    },
    revisarSeleccion(idSeleccionado) {
      if(this.intentos < 3){
        if(this.intentos==0 && this.pokemonCorrecto.id == idSeleccionado){
                 this.puntaje +=5;
                 this.showPokemon = true;
            this.mostrarSiguiente = true;
            this.ganador=true;
           // this.cargaJuegoInicial();
        } else if(this.intentos==1 && this.pokemonCorrecto.id==idSeleccionado){
          this.puntaje +=2;
                 this.showPokemon = true;
            this.mostrarSiguiente = true;
            this.ganador=true;
           // this.cargaJuegoInicial();
        }else if(this.intentos==2 && this.pokemonCorrecto.id==idSeleccionado){
          this.puntaje +=1;
                 this.showPokemon = true;
            this.mostrarSiguiente = true;
            this.ganador=true;
           // this.cargaJuegoInicial();
        }else{
         ++ this.intentos
        }

      }else{
        this.perdedor = true;
        this.mostrarSiguiente = true;
      }

    },
    siguienteM() {
      this.cargaJuegoInicial();
    },
    ganador() {
      this.ganador = true;
      this.showPokemon=true;
      this.mostrarSiguiente=true;
    },
    perdedor() {
      this.perdedor = true;
      this.mostrarSiguiente=true;
    },
    reiniciar() {
      this.puntaje = 0;
      this.intentos = 0;
      this.ganador = false;
      this.perdedor = false;
      this.juegoActivo = true;
      this.pokemonCorrecto = null;
      this.mostrarSiguiente=false;
      this.cargaJuegoInicial();
    },
  },
  
};
</script>

<style>
h1,
h2 {
  color: rgb(66, 145, 169);
}
.container{
  text-align: center;
}

.puntajes p{
  display: inline;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 20px;
  font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;

}

button{
  font-size: 20px;
  border-style: none;
  border-radius: 10px;
  width: 120px;
}

button:hover{
  background-color: aqua;
}
</style>
