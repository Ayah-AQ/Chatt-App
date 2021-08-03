import instance from "./instance";

import * as actionTypes from "./types";

export const fetchChats = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/chats/`);
      // console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_CHATS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addChat = (newChat) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newChat) formData.append(key, newChat[key]);
      const res = await instance.post("/chats", formData);
      dispatch({
        type: actionTypes.ADD_CHAT,
        payload: { newChat: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteChat = (chatId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/chats/${chatId}`);
      dispatch({
        type: actionTypes.DELETE_CHAT,
        payload: { chatId: chatId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const chatDetail = (chatId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/chats/${chatId}`);
      // console.log(res.data);
      dispatch({
        type: actionTypes.DETAIL_CHAT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
