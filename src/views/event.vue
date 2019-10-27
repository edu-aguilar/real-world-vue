<template>
  <div class="view event-detail-view">
    <h1>Details for event {{ id }}</h1>
    <div v-if="event">
      <!-- this ternary is to prevent runtime error -->
      <p>{{ event.user ? event.user.name : "" }}</p>
      <p>{{ event.category }} - {{ event.description }}</p>
      <p>Located at {{ event.location }}</p>
      <p>Thanks {{ event.organizer }}! for your work!</p>
      <ul v-if="!!event.attendees">
        <li v-for="(attendee, index) in event.attendees" :key="index">
          {{ attendee }}
        </li>
      </ul>
      <p v-else>There is no attendees yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  created() {
    this.$store.dispatch("fetchEvent", this.id);
  },
  computed: {
    event() {
      return this.$store.state.event;
    }
  }
  //shorthand for this computed: computed: mapState(["event"])
};
</script>
