<template>
  <div class="view home-view">
    <h1>Most important events forthis weekend!</h1>

    <section class="card-list">
      <router-link
        class="link"
        v-for="event in events"
        :key="event.id"
        :to="{ name: routes.event.name, params: { id: event.id.toString() } }"
      >
        <eventCard :data="event" />
      </router-link>
    </section>
  </div>
</template>

<script>
import { DYNAMIC_ROUTES } from "./../router";
import eventCard from "./../components/eventCard";
import { getEvents } from "@/services/apiService";

export default {
  name: "Home",
  components: {
    eventCard
  },
  data: function() {
    return {
      routes: DYNAMIC_ROUTES,
      events: Array
    };
  },
  created() {
    getEvents()
      .then(events => (this.events = events.data))
      .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

.link {
  text-decoration: none;

  & + .link {
    margin-top: 1rem;
  }
}
</style>
