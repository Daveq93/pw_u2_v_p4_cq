<template>
  <h1>pokemon options</h1>
  <div class="contenedor-opciones">
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  </div>
  
</template>

<script>
export default {};
</script>

<style>
ul{
  list-style-type: none;
}
li{
  border:1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  background-color: aliceblue;
  margin-bottom: 10px;
  width: 200px;
  font-size: 25px;
  cursor: pointer;
  
}
li:hover{
  background-color: chocolate;
}
.contenedor-opciones{
display:flex ;
justify-content: center;
}

</style>