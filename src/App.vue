<template>
  <main class="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </main>
</template>

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

          & + li { margin-left: 1rem; }

          a.router-link-exact-active {
            color: #42b983;
          }
        }
      }
    }
  }
</style>>

