<template>
  <header>
    <h2>My awesome Blog website</h2>
  </header>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Posts />
</template>

<script>
import Posts from "./components/Posts.vue";

export default {
  name: "App",
  components: {
    Posts,
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
