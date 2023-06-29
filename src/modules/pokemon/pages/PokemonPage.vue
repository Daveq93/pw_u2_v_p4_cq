<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="251" :muestraPokemon="false"></PokemonImg>
  <PokemonOps></PokemonOps>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/pokemonOps.vue";

export default {
    components: {
    PokemonImg,
    PokemonOps,
  },
};
</script>



<style>
h1,h2{
  color: bisque;
}

</style>