<template>
  <div class="contenedor-imagen">
    <img
      class="oculta-pokemon"
      :src="imagenFuente"
      alt="no se puede mostrar img"
    />
    
    <img v-if="muestraPokemon"
      :src="imagenFuente"
      alt="no se puede mostrar img"
    /> 
  </div>
</template>
<!--el escoped afecta solo al componente donde esta ubidao el estilo-->
<script >
export default {
  computed: {
    imagenFuente() {
      console.log('impr')
      //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg";
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon:{
      type:Boolean,
      required:true,
    }
  },

};
</script >

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}
img {
  position: absolute;
  height: 200px;
  
}
.contenedor-imagen {
  display: flex;
  justify-content: center;
  height: 200px;
}
</style>