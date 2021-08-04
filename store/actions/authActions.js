import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types"
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  AsyncStorage.setItem("Token", token);
  if(token){
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };}
  else{delete instance.defaults.headers.common.Authorization;
    return {
      type: types.SET_USER,
      payload: null,
    };
}
};

export const signUp = (newUser) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      navigation.navigate("ChatListComponent")
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (userData,navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      navigation.navigate("ChatListComponent")
    } catch (error) {
      console.log(error);
    }
  };

};

export const signout = (navigation) => {
   return setUser() 
}
export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("Token");

  if (token) {
    const user = decode(token);

    if (Date.now() < user.exp) {
      dispatch(setUser(token));
    } else {
      AsyncStorage.removeItem("Token");
      dispatch(signout());
    }
  }
};


export const fetchProfiles = (userId) => {
  return async (dispatch) => {
    try {
      console.log("hello", userId);
      const res = await instance.get(`/userprofile/${userId}`);

      dispatch({
        type: actionTypes.FETCH_PROFILES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateProfile = (updatedProfile, userId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      const res = await instance.put(`/userprofile/${userId}`, formData);
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: { updatedProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};