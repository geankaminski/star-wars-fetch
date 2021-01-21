<template>
  <div id="app">
    <b-container >
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  background-image: url("./assets/space.jpg");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url("./assets/space.jpg");
}
</style>