import Vue from "vue";
import Vuex from "vuex";
import { getEvents } from "@/services/apiService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    fetchEvents({ commit }) {
      getEvents().then(res => {
        commit("SET_EVENTS", res.data);
      });
    }
  },
  getters: {
    eventById: state => eventId => {
      return state.events.find(event => event.id == eventId);
    }
  }
});
