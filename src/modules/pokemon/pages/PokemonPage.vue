<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="251" :muestraPokemon="false"></PokemonImg>
  <PokemonOps :opciones="arregloPok"></PokemonOps>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/pokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientePokemonApi";

export default {
  data:{
  arregloPok : "",
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.arregloPok = arregloPokemons;
    },
  },
  mounted() {
    console.log("se monto el componente");
    this.cargaJuegoInicial();//los metdos dentro del mounted no necesita el async ni el await
  },
};
</script>



<style>
h1,
h2 {
  color: bisque;
}
</style>