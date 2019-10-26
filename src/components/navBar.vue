<template>
  <nav>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="{ name: route.name }">{{ route.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  props: {
    routes: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
