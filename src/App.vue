<template>
<NavBar></NavBar>
<router-view></router-view>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
