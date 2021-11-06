import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://exodus-ieeesbm.herokuapp.com/api/auth/";

class AuthService {
  login(email, password) {
    console.log(email,password);
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        if (response.data.token) {
          // console.log("Response");
          // console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data.token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password,college,phoneno) {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password,
      college,
      phoneno
    });
  }
  getUser(){
    return axios.get(API_URL,{
      headers:authHeader()
    })
    .then((resp)=>{
      return resp.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}

export default new AuthService();
