import axios from "axios";
const springBootAppUrl = `http://localhost:8088/Trip`;

/* Book Cab Service */
const bookCabService = (trip) => {
  return axios.post(`${springBootAppUrl}/bookCab`, trip);
};

/* Update Trip Service */
const updateTripService = (trip) => {
  return axios.put(`${springBootAppUrl}/update`, trip);
};
/* View Trip */
const viewTripService = () => {
  return axios.get(`${springBootAppUrl}/view`);
};
/* View All Trip */
const viewAllTripDataService = () => {
  return axios.get(`${springBootAppUrl}/viewAllTripData`);
};


const viewTripByIdService = (Id) => {
  console.log(Id);
  return axios.get(`${springBootAppUrl}/viewAll/${Id}`);
};

const endTripService = () => {
  return axios.put(`${springBootAppUrl}/endTrip`);
};

export {
  bookCabService,
  updateTripService,
  viewTripService,
  endTripService,
  viewTripByIdService,
  viewAllTripDataService,
};
