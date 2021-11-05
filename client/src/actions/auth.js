import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    GET_USER_FAIL,
    GET_USER,
  } from "./types";
  
  import AuthService from "../services/auth.service";
  
  export const register = (name, email, password,college,phoneno) => (dispatch) => {
    return AuthService.register(name, email, password,college,phoneno).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    console.log("Action login");
    return AuthService.login(email, password).then(
      (data) => {
        console.log(data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        // console.log(data);
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

  export const getUser =  ()=>
    async(dispatch)=>{
      try{
        const res = await AuthService.getUser();
        if(res){
          dispatch({
            type:GET_USER,
            payload:res
          })
        }
        else{
          dispatch({
            type:GET_USER_FAIL
          })
        }
      }
      catch(err){
        dispatch({
          type:GET_USER_FAIL
        })
      }
    }

  
  