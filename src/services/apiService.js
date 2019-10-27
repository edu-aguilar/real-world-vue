import axios from "axios";

const _axios = axios.create({
  baseURL: "http://my-json-server.typicode.com/Code-Pop/real-world-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

const ENDPOINTS = {
  EVENTS: "/events"
};

const getEvents = () => {
  return _axios.get(ENDPOINTS.EVENTS);
};

const getEvent = (eventId = 1) => {
  return _axios.get(`${ENDPOINTS.EVENTS}/${eventId}`);
};

const postEvent = event => {
  return _axios.post(`${ENDPOINTS.EVENTS}`, event);
};

export { getEvents, getEvent, postEvent };
