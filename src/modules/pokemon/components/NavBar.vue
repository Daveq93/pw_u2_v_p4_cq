<template>
  <div class="nav">
    <router-link to="/">Bienvenido</router-link>
    <router-link to="/juego">Juego</router-link>
    <router-link to="/premios">Premios</router-link>
    <router-link to="/pokemon">Pokemon</router-link>
  </div>
</template>

<script>
import PokemonPage from '../pages/PokemonPage.vue';
import PremiosPage from '../pages/PremiosPage.vue';

export default {
  props:{
    arr:{
      type:Array,
      required:false,
    }
  },
  data(){
    return{
      vect : [],
    }
  },
  methods:{
      enviar(){
        
        this.vect = arr;
        console.log("------- "+this.vect);
        return this.vect;
      }
  },
  computed(){
         
  }

}
</script>

<style scoped>
div{
    padding: 0 30px;
}

a {
  outline: none;
  text-decoration: none;
  padding: 5px;
  background-color: rgba(5, 202, 247,0.5);
  font-size: 20px;
}


div a{
    font-weight: bold;
    color: #f5f6f8;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 10px;
    /*background-color: rgba(5, 202, 247,0.5);*/
    
}
a:hover{
  background-color: rgb(5, 202, 247);
}

</style>