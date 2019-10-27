<template>
  <div class="view new-event-view">
    <h1>This is a view to create event</h1>
    <form class="new-event" @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <DatePicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <button class="create-event" type="submit">Create Event</button>
    </form>
  </div>
</template>

<script>
import DatePicker from "vuejs-datepicker";

export default {
  components: {
    DatePicker
  },
  data: function() {
    return {
      event: createEventObject(),
      categories: [
        "category 1",
        "category 2",
        "category 3",
        "category 4",
        "category 5"
      ],
      times: createTimes()
    };
  },
  methods: {
    createEvent() {
      this.$store.dispatch("createEvent", this.event).then(() => {
        this.event = createEventObject();
      });
    }
  }
};

const createTimes = () => {
  let times = [];
  for (let i = 1; i < 24; i++) {
    times.push(i + ":00");
  }
  return times;
};

const createEventObject = () => {
  const id = Math.floor(Math.random() * 1000000);
  return {
    attendees: [],
    category: "",
    date: "",
    description: "",
    id,
    location: "",
    organizer: "",
    time: "",
    title: ""
  };
};
</script>

<style lang="scss" scoped>
form.new-event {
  display: flex;
  flex-direction: column;
  align-items: center;

  .field + .field {
    margin-top: 1rem;
  }

  button.create-event {
    margin-top: 1rem;
  }
}
</style>
