<template>
  <h3>{{ tituloComponente }}</h3>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>

  <button @click="clickSum()">+</button>
  <button @click="clickRes()">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: 0,
      tituloComponente :this.titulo ,
    };
  },
  methods: {
    clickSum() {
      //alert("intentando sumar"+this.numero)
      return this.numero++;
    },
    clickRes() {
      //alert("intentando sumar"+this.numero)
      return this.numero--;
    },
    obtenerCuadrado() {
      console.log("Entrando al metodo cuadrado");
      return this.numero * this.numero;
    },
  },
  computed: {
      obtenerCuadradoComputado() {
        console.log("Entrando al metodo cuadrado computado");
        return this.numero * this.numero;
      },
    },
    props:['titulo','valor2']
};

</script>

<style>
button {
  background-color: #41B883;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;
}
button:hover {
  background-color: #acd3bd;
}
</style>