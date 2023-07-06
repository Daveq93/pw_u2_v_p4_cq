<template>
  <h1 v-if="pokemonCorrecto">Espere por favor!</h1>
  <div v-el>
    <h1>Juego Pokemon</h1>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="true" />
    <PokemonOps
      :opciones="pokemonArr"
      @seleccionado="revisarSeleccion($event)"
    />
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/pokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientPokemonApi";

export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      showPokemon: false,
    };
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.pokemonArr = this.arregloPokemons;
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
    },
    revisarSeleccion(idSeleccionado) {
      console.log("evento en el padre");
      this.showPokemon = true;
      console.log(idSeleccionado);
      if (this.pokemonCorrecto == idSeleccionado) {
      }
    },
  },
  mounted() {
    this.cargaJuegoInicial();
  },
};
</script>

<style>
h1,
h2 {
  color: bisque;
}
</style>