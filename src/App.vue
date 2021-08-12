<template>
  <AppNavigation />
  <router-view></router-view>
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
#app {
  font-family: "Atkinson Hyperlegible", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>
