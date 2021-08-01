import * as types from "./ActionTypes";

const initialState = {
  appointments: [],
  Slots: [],
  newAppointment:{}
};

const appointmentReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    
    case types.GET_SLOTS:
      return {
        ...state,
        Slots: payload,
      };
      case types.GET_APPOINTMENT:
      return {
        ...state,
        appointments: payload,
      };
      case types.ADD_APPOINTMENT:
      return {
        ...state,
        newAppointment: payload,
      };

    default:
      return state;
  }
};

export default appointmentReducer;
