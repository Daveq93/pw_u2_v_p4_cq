<template>
  <img v-if="urlImagen" v-bind:src="urlImagen" alt="respApiImg" />

  <div class="dg-dark"></div>

  <div class="contenedor">
    <h1>Caracola Magica</h1>
    <p>Recuerda terminar la pregunta con el signo ?</p>
    <input v-model="pregunta" type="text" placeholder="hasme una preguna" />
    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      countY: 0,
      countN:0,
      urlImagen: null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      //este es el mismo que el atributo pregunta
      // console.log('value: '+value)
      // console.log('old value: '+oldValue)
      if (value.includes("?")) {
        console.log("consumir API");
        this.consumirApi();
        this.contarYes();
      }
    },
  },
  methods: {
    async consumirApi() {
      //para consumir una api debemos usar fetch()
      //cada vez que ejecutamos el fetch tenemos que esperar la respuesta
      //  cuando tengo un metodo que tiene en su cuerpo el await, necesito ponerle la palabra reservada async al metodo
      const respuesta = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      console.log("resp: " + respuesta);
      const { answer, image } = respuesta;
      console.log("respuesta: " + answer);
      this.respuesta = answer;
      console.log(image);
      this.urlImagen = image;
      if (answer === "yes") {
        this.countY++;
        console.log("contador: " + this.countY);
      }else{
        this.countN++;
      }
    },
    contarYes() {
      if (this.countY === 2) {
        window.alert("Estas de suerte, has acertado 2 veces");
        this.countY = 0;
      }else if(this.countN===2){
        window.alert("hoy no es un buen dia, tienes 2 NO")
        this.countN=0;
      }
      
    },
  },
};
</script>

<style>
img,
.bg-dark {
  height: 100vh; /**/
  width: 100vw; /**/
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.contenedor {
  position: relative;
}
input {
  width: 200px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
}

p,
h1,
h2 {
  color: white;
}

p {
  font-size: 30px;
  margin-top: 0px;
}
</style>
