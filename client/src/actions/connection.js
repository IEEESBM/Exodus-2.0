import { 
    GET_PUBLIC_USERS,
    GET_FRIENDS,
    GET_SENT_REQUESTS,
    GET_RECEIVED_REQUESTS,
    TOGGLE_PUBLIC,
    SEND_REQUEST,
    ACCEPT_REQUEST,
    GET_PUBLIC_USERS_FAIL,
    GET_RECEIVED_REQUESTS_FAIL,
    GET_SENT_REQUESTS_FAIL,
    GET_FRIENDS_FAIL
 } from './types';

 import ConnectionService from '../services/connection.service';

export const togglePublic = (id)=>{
    return (dispatch)=>{
        return ConnectionService.togglePublic(id).then((resp)=>{
            dispatch({
                type:TOGGLE_PUBLIC,
                payload:resp
            })
            dispatch({
                type:GET_PUBLIC_USERS,
                payload:resp
            })
        })
    }
}

export const getPublicUsers = ()=>
    async(dispatch)=>{
        try{
            const res = await ConnectionService.getPublicUsers();
            if(res){
                dispatch({
                    type:GET_PUBLIC_USERS,
                    payload:res
                })
            }
            else{
                dispatch({
                    type:GET_PUBLIC_USERS_FAIL,
                    payload:undefined
                })
            }
            
        }
        catch(err){
            console.log(err);
            dispatch({
                type:GET_PUBLIC_USERS_FAIL,
                payload:undefined
            })
        }
    
}

export const getRequests = (id)=>
    async(dispatch)=>{
        try{
            const res = await ConnectionService.getRequests(id);
            if(res){
                dispatch({
                    type:GET_RECEIVED_REQUESTS,
                    payload:res
                })  
            }
            else{
                dispatch({
                    type:GET_RECEIVED_REQUESTS_FAIL,
                    payload:undefined
                })
            }
            
        }
        catch(err){
            console.log(err);
            dispatch({
                type:GET_RECEIVED_REQUESTS_FAIL,
                payload:undefined
            })
        }
    }

export const getSentRequests = (id)=>
    async(dispatch)=>{
        try{
            const res = await ConnectionService.getSentRequests(id);
            if(res){
                dispatch({
                    type:GET_SENT_REQUESTS,
                    payload:res
                })
            }
            else{
                dispatch({
                    type:GET_SENT_REQUESTS_FAIL,
                    payload:undefined
                })
            }
        }
        catch(err){
            console.log(err);
            dispatch({
                type:GET_SENT_REQUESTS_FAIL,
                payload:undefined
            })
        }
    }

export const getReceivedRequests = (id)=>
async(dispatch)=>{
    try{
        const res = await ConnectionService.getRequests(id);
        if(res){
            dispatch({
                type:GET_RECEIVED_REQUESTS,
                payload:res
            })
        }
        else{
            dispatch({
                type:GET_RECEIVED_REQUESTS_FAIL,
                payload:undefined
            })
        }
    }
    catch(err){
        console.log(err);
        dispatch({
            type:GET_RECEIVED_REQUESTS_FAIL,
            payload:undefined
        })
    }
}


export const getFriends = (id)=>
    async(dispatch)=>{
        try{
            const res = await ConnectionService.getFriends(id);
            if(res){
                dispatch({
                    type:GET_FRIENDS,
                    payload:res
                })
            }
            else{
                dispatch({
                    type:GET_FRIENDS_FAIL,
                    payload:undefined
                })
            }
        }
        catch(err){
            console.log(err);
            dispatch({
                type:GET_FRIENDS_FAIL,
                payload:undefined
            })
        }
    }    

export const sendRequest = (currentUserId, requestedUserId)=>
    async(dispatch)=>{
        try{
            const res = await ConnectionService.sendRequest(currentUserId, requestedUserId);
            console.log(res);
            dispatch({
                type:SEND_REQUEST,
                payload:res.data
            })
        }
        catch(err){
            console.log(err);
        }
    
}

export const acceptRequest = (requestedUserId,currentUserId)=>
    async(dispatch)=>{
        try{
            console.log("current ",currentUserId);
            console.log("requested ",requestedUserId);
            const res = await ConnectionService.acceptRequest(requestedUserId,currentUserId);
            dispatch({
                type:ACCEPT_REQUEST,
                payload:res.data
            })
        }
        catch(err){
            console.log(err);
        }
    
}