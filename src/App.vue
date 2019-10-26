<template>
  <main class="app">
    <navBar class="header" :routes="routes" />
    <router-view />
  </main>
</template>

<script>
import { STATIC_ROUTES } from "./router";
import navBar from "./components/navBar";

export default {
  name: "App",
  components: {
    navBar
  },
  data: function() {
    return {
      routes: STATIC_ROUTES
    };
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}

main.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas: "header" "view";
}

main .header {
  grid-area: header;
}
main .view {
  grid-area: view;
}
</style>
