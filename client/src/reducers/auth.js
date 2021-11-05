import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER,
    GET_USER_FAIL
  } from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user,userData:{},isUser:false }
    : { isLoggedIn: false, user: null,isUser:false };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        console.log('Register red');
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case GET_USER:
        return{
          ...state,
          userData:payload,
          isUser:true
        }
      case GET_USER_FAIL:
        return{
          ...state,
          userData:undefined,
          isUser:false
        }
      default:
        return state;
    }
  }
  