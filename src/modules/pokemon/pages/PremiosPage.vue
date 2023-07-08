<template>
  <div class="premios">
    <div>
      <img src="../../../img/trofeo.png" alt="sin img">
    </div>
   
    <ul>
      <li>Intento 1: 10000</li>
      <li>Intento 2: 5000</li>
      <li>Intento 3: 1000</li>
    </ul>
  </div>
</template>

<script>
import PokemonPage from "./PokemonPage.vue";
export default {
 
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-top: 200px;
}



.premios{
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;

}

li{
  font-size: 30px;
  margin: 10px;
}

img{
  margin-left: 800px;
  margin-top: 100px;
  width: 150px;
  height: 150px;
}
</style>
