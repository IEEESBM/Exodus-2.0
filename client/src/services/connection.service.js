import axios from "axios";

const API_URL = "http://localhost:4000/api/";

class ConnectionService{
    togglePublic(id){
        return axios.post(API_URL+'toggle-public/'+id)
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getPublicUsers(){
        return axios.get(API_URL+'public-users')
        .then((resp)=>{
            // console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
                console.log(err);
        })
    }
    getRequests(id){
        return axios.get(API_URL+'requests/'+id)
        .then((resp)=>{
            // console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getSentRequests(id){
        return axios.get(API_URL+'sent-requests/'+id)
        .then((resp)=>{
            // console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getFriends(id){
        return axios.get(API_URL+'friends/'+id)
        .then((resp)=>{
            // console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    sendRequest(currentUserId, requestedUserId){
        console.log(currentUserId+" "+ requestedUserId)
        return axios.put(API_URL+'send-request',{currentUserId,requestedUserId})
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    acceptRequest(requestedUserId,currentUserId){
        return axios.put(API_URL+'accept-request',{currentUserId,requestedUserId})
        .then((resp)=>{
            console.log(resp);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export default new ConnectionService();