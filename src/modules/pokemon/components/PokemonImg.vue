<template>
  
    <div class="contenedor-imagen">
      <img
        class="oculta-pokemon"
        :src="imagenFuente"
        alt="no se puede mostrar img"
      />

      <img
        v-if="muestraPokemon"
        :src="imagenFuente"
        alt="no se puede mostrar img"
      />
    </div>

</template>
<!--el escoped afecta solo al componente donde esta ubidao el estilo-->
<script>
export default {
  computed: {
    imagenFuente() {
      console.log("impr");
      //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg";
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}
img {
  margin-top: 25px;
  position: absolute;
  height: 200px;
  
}

.contenedor-imagen {
  display: flex;
  justify-content: center;
  height: 250px;
  width: 350px;
  background-color: rgba(42, 93, 137, 0.4);
  filter: drop-shadow(-2px 2px 45px rgba(255, 255, 255, 2));
}
</style>
