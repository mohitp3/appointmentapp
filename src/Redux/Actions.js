import * as types from "./ActionTypes";
import axios from "axios";

export const getSlots = (data) => ({
  type: types.GET_SLOTS,
  payload: data,
});
export const addAppointment = (data) => ({
  type: types.ADD_APPOINTMENT,
  payload: data,
});
export const getAppointment = (data) => ({
  type: types.GET_APPOINTMENT,
  payload: data,
});

export const getSlotsinit = (date, timezone) => {
  return (dispatch) => {
    axios
      .get(
        process.env.REACT_APP_PROD_URL +
          "/api/getSlot?date=" +
          date +
          "&timezone=ist"
      )
      .then((response) => {
        dispatch(getSlots(response.data));
      })
      .catch((err) => {
        dispatch(getSlots([]));
      });
  };
};

export const addAppointmentinit = (data) => {
  return (dispatch) => {
    axios
      .post(process.env.REACT_APP_PROD_URL + "/api/addAppointment", data)
      .then((response) => {
        dispatch(addAppointment(response.data));
      })
      .catch((err) => {
        dispatch(addAppointment({}));
      });
  };
};

export const getAppointmentinit = (data) => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_PROD_URL + "/api/getAppointments")
      .then((response) => {
        dispatch(getAppointment(response.data));
      })
      .catch((err) => {
        dispatch(getAppointment([]));
      });
  };
};