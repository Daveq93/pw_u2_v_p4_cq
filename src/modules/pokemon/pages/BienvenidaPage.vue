<template>
  <div>
    <div>
      <h1>Bienvenido al Juego Pokemon</h1>
    </div>

    <div class="textoBienvenida">
      <p>
        Bienvenido al juego Pokemon, en esta pagina usted podra jugar a adivinar
        el pokemon.
        <br>
        <br>
        En la parte superior se encuentran las opciones para que usted pueda nevegar en la pagina
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 40px;
}

.textoBienvenida{
  display: flex;
justify-content: center;
}

.textoBienvenida p{
  padding: 10px;
  width: 300px;
  height: 200px;
background-color: rgba(118, 56, 56,0.4);
border-radius: 20px;
font-size: 20px;
}

</style>
