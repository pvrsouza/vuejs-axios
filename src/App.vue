/* eslint-disable no-console */
<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$legado
      .post("usuarios.json", {
        nome: "Legado"
      })
      .then(res => console.log("legado", res));

    this.$http
      .post("usuarios.json", {
        nome: "Global"
      })
      .then(res => console.log("global", res));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
