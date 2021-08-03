import instance from "./instance";

import * as actionTypes from "./types";

 export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/messages");
      // console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_MESSAGES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
 };

 export const addMessage = (newMessage, chatId) => {
  console.log(chatId, newMessage);
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newMessage) formData.append(key, newMessage[key]);
      const res = await instance.post(`/chats/${chatId}/messages`, formData);
      dispatch({
        type: actionTypes.ADD_MESSAGE,
        payload: { newMessage: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
 };

 export const deleteMessage = (messageId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/messages/${messageId}`);
      dispatch({
        type: actionTypes.DELETE_MESSAGE,
        payload: { messageId: messageId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
