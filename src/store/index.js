import Vue from "vue";
import Vuex from "vuex";
import { getEvents, postEvent, getEvent } from "@/services/apiService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    event: {}
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENT(state, event) {
      state.event = event;
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
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.eventById(id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        getEvent(id).then(res => {
          commit("SET_EVENT", res.data);
        });
      }
    }
  },
  getters: {
    eventById: state => eventId => {
      return state.events.find(event => event.id == eventId);
    }
  }
});
