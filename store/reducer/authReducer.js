import * as actionTypes from "../actions/types";

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
     case actionTypes.UPDATE_PROFILE:
      const { updatedProfile } = action.payload;
      console.log(state.profiles);
      return {
        ...state,
        user: updatedProfile,
      };
    case actionTypes.FETCH_PROFILES:
      return {
        ...state,
        user: action.payload,

        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
