import * as actionTypes from "../actions/types";

const initialState = {
  messages: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case actionTypes.ADD_MESSAGE:
      const { newMessage } = action.payload;
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    case actionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload.messageId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
