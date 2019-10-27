import Vue from "vue";
import Vuex from "vuex";
import { getEvents, postEvent } from "@/services/apiService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    fetchEvents({ commit }) {
      getEvents().then(res => {
        commit("SET_EVENTS", res.data);
      });
    },
    createEvent({ commit }, event) {
      return postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    }
  },
  getters: {
    eventById: state => eventId => {
      return state.events.find(event => event.id == eventId);
    }
  }
});
