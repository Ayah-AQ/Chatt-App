import * as actionTypes from "../actions/types";

const initialState = {
  profiles: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };

    case actionTypes.ADD_PROFILE:
      const { newProfile } = action.payload;
      return {
        ...state,
        profiles: [...state.profiles, newProfile],
      };
    case actionTypes.UPDATE_PROFILE:
      const { updatedProfile } = action.payload;
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === updatedProfile.id ? updatedProfile : profile
        ),
      };
    default:
      return state;
  }
};

export default reducer;
