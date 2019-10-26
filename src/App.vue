<template>
  <main class="app">
    <nav>
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="{ name: route.name }">
            {{ route.label }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </main>
</template>

<script>
import { STATIC_ROUTES } from "./router";

export default {
  name: "App",
  data: function() {
    return {
      routes: STATIC_ROUTES
    };
  }
};
</script>

<style lang="scss" scoped>
main.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  nav {
    padding: 30px;

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      padding: 0;

      li {
        font-weight: bold;
        color: #2c3e50;

        & + li {
          margin-left: 1rem;
        }

        a.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>
