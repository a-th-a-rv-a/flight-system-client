import axios from "axios";

export const GET_ONE_WAY_FLIGHTS = "/api/flights/oneWay";
export const GET_TWO_WAY_FLIGHTS = "/api/flights/twoWay";
export const GET_AIRLINE = "/api/flights/airline";
export const GET_RECOMMENDED = "/api/flights/recommended";
export const GET_USER_TRIPS = "/api/flights/user-trips";
export const BOOK_FLIGHT = "/api/flights/book";
export const CANCEL_FLIGHT = "/api/flights/cancel";

export function getOneWayFlights({
  origin,
  destination,
  depart,
  adults,
  child
}) {
  return axios.get(
    `${GET_ONE_WAY_FLIGHTS}?origin=${origin}&destination=${destination}&depart=${depart}&adults=${adults}&child=${child}`
  );
}
export function getTwoWayFlights({
  origin,
  destination,
  depart,
  return: returnDate,
  adults,
  child
}) {
  return axios.get(
    `${GET_TWO_WAY_FLIGHTS}?origin=${origin}&destination=${destination}&depart=${depart}&adults=${adults}&child=${child}&returnDate=${returnDate}`
  );
}

export function getAirline({ airlineCodes }) {
  return axios.get(`${GET_AIRLINE}?airlineCodes=${airlineCodes}`);
}
export function getRecommended() {
  return axios.get(GET_RECOMMENDED);
}

export function bookFlight({ details, userId }) {
  return axios.post(BOOK_FLIGHT, { details, userId });
}

export function cancelFlight({ flightId }) {
  return axios.put(CANCEL_FLIGHT, { flightId });
}

export function getUserTrips(userId) {
  return axios.get(`${GET_USER_TRIPS}/${userId}`);
}
