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
import { getEvent } from "@/services/apiService";

export default {
  props: {
    id: String
  },
  data() {
    return {
      event: {
        type: Object,
        required: true
        //default: () => ({user: {}, attendess: []})
      }
    };
  },
  created() {
    getEvent(this.id)
      .then(event => (this.event = event.data))
      .catch(error => {
        throw error;
      });
  }
};
</script>
