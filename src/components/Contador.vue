<template>
  <h3>{{ evalTitulo }}</h3>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>

  <button @click="clickSum()">+</button>
  <button @click="clickRes()">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: this.inicio,
      tituloComponente: this.titulo,
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
    evalTitulo() {
      return this.tituloComponente || "valor por defecto";
    },
  },
  props: {
    titulo: String,
    inicio: {
      type: Number,
      required: false, //estoy obligado a mandar el parametro cuando esta en true
      default: 6, //va a tener un valor por defecto si no se envia el valor en este caso 6
      validator(value) {
        return value > 10;
      },
    },
  },
};
</script>

<style>
button {
  background-color: #41b883;
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