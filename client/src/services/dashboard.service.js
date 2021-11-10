import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/api/team/";

class DashboardService{
    getTeam(){
        return axios.get(API_URL,{
            headers: authHeader()
        })
        .then((resp)=>{
            console.log('get team service');
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    createTeam(teamName){
        console.log(teamName);
        return axios.post(API_URL+"create",{teamName},
        {
            headers: authHeader()
        })
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    joinTeam(teamID){
        return axios.post(API_URL+"join",{teamID},{
            headers: authHeader()
        })
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    leaveTeam(teamID){
        return axios.post(API_URL+"leave",{teamID},{
            headers: authHeader()
        })
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    deleteTeam(teamID){
        console.log(teamID);
        return axios.post(API_URL+"delete",{teamID},{
            headers: authHeader()
        })
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    submitWebsite(websiteLink,details,topic){
        return axios.post(API_URL+'submit',{websiteLink,details,topic},{
            headers: authHeader()
        })
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export default new DashboardService();