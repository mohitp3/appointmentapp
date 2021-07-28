import * as types from "./ActionTypes";
import axios from "axios";

export const getSlots = (data) => ({
    type: types.GET_SLOTS,
    payload: data,
  });

export const getSlotsinit = (date,timezone) => {
    return (dispatch) => {
      axios
      .get("http://localhost:5000/api/getSlot?date="+date+"&timezone=ist")
        .then((response) => {
          dispatch(getSlots(response.data));
        })
        .catch((err) => {
          dispatch(getSlots([]));
        });
    };
  };