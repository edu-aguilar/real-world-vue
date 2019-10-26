<template>
  <div class="home-view">
    <h1>This is the Home page</h1>
    <input type="text" v-model="id" />
    <router-link :to="{ name: routes.event.name, params: { id } }">
      {{ routes.event.label }} #{{ id }}
    </router-link>
  </div>
</template>

<script>
import { DYNAMIC_ROUTES } from "./../router";

export default {
  name: "Home",
  data: function() {
    return {
      routes: DYNAMIC_ROUTES,
      id: "3"
    };
  }
};
</script>
