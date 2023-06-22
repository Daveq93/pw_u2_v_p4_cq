<template>
  <div>
    <h1>Caracola Magica</h1>

    <img
      src="https://avatars.akamai.steamstatic.com/e6a2f0aad4d804cfc48c41a1fbf357076edc986e_full.jpg"
      alt="respApiImg"
    />

    <p>Recuerda terminar presionando un Enter la pregunta</p>
    <input v-model="pregunta" type="text" placeholder="hasme una preguna" />
    <div>
      <h2>Voy a pasar de año</h2>
      <h1>Si,No</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "hola mundo",
    };
  },
};
</script>

<style>
</style>