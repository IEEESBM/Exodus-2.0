import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API+"team/";

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
    joinTeam(teamId){
        return axios.post(API_URL+"/join",{teamID:teamId},{
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
    leaveTeam(teamId){
        return axios.post(API_URL+"/leave",{teamID:teamId},{
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
    deleteTeam(teamId){
        return axios.post(API_URL+"/delete",{teamID:teamId},{
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
}

export default new DashboardService();