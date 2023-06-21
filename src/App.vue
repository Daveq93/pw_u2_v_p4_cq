<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Prueba titulo" v-bind:inicio="2 * 6" />
  <!--para que ese dos se comporte como js se debe agregar el v-bind-->
  <Contador titulo="Operacion" :inicio="10" />
</template>



<script>
import Contador from "./components/Contador.vue";
export default {
  name: "App",
  components: {
    Contador,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
