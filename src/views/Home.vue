<template>
  <div class="view home-view">
    <h1>This is the Home page</h1>

    <input type="text" v-model="id" />
    <router-link :to="{ name: routes.event.name, params: { id } }">
      {{ routes.event.label }} #{{ id }}
    </router-link>

    <section class="card-list">
      <eventCard />
    </section>
  </div>
</template>

<script>
import { DYNAMIC_ROUTES } from "./../router";
import eventCard from "./../components/eventCard";

export default {
  name: "Home",
  components: {
    eventCard
  },
  data: function() {
    return {
      routes: DYNAMIC_ROUTES,
      id: "3"
    };
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
