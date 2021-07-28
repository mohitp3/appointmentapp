import * as types from "./ActionTypes";

const initialState = {
  appointments: [],
  Slots: [],
};

const appointmentReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    
    case types.GET_SLOTS:
      return {
        ...state,
        slots: payload,
      };

    default:
      return state;
  }
};

export default appointmentReducer;
