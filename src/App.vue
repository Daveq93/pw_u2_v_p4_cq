<template>
  <img
        src="https://lh3.googleusercontent.com/05JfZ1ZdyzrRNvhJosUFdcjjJRFE7k2KhmeM2ujqeCbrcrCb1hkq7O_JdUBpQ3r9hi0YeSn4WgmKx3Ai8LHdM2SucxSzl9TRZ4fCAqETJ6WtHgE=w1440-e365"
        alt="imgPokemon"
      />

      <div class="bg-dark"></div>

      <div class="contenedor">
        <NavBar></NavBar>
        <router-view></router-view>
      </div>


</template>


<script>
//import Contador from "./components/Contador.vue";
import NavBar from './modules/pokemon/components/NavBar.vue';
export default {
  name: "App",
  components: {
    // Contador,
   NavBar,
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

img, .bg-dark {
  height: 100vh; /**/
  width: 100vw; /**/
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark{
  background-color: rgba(0, 0, 0, 0.2);
}
.contenedor {
  position: relative;
}

h1,h2{
  color: aliceblue;
  font-style: bold;
}

</style>
