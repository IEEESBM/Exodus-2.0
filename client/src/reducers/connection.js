import { 
    GET_PUBLIC_USERS,
    GET_FRIENDS,
    GET_SENT_REQUESTS,
    GET_RECEIVED_REQUESTS,
    TOGGLE_PUBLIC,
    SEND_REQUEST,
    ACCEPT_REQUEST,
    GET_FRIENDS_FAIL,
    GET_PUBLIC_USERS_FAIL,
    GET_RECEIVED_REQUESTS_FAIL,
    GET_SENT_REQUESTS_FAIL
 } from '../actions/types';

const initialState = {
    userData:{},
    publicusers:[{}],
    hasPublicUsers: false,
    friends:[{}],
    hasFriends:false,
    receivedrequests:[{}],
    hasReceivedRequests:false,
    sentrequests:[{}],
    hasSentRequests:false
}
export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case TOGGLE_PUBLIC:
            return{
                ...state,
                userData: payload
            }
        case GET_PUBLIC_USERS:
            return{
                ...state,
                publicusers:payload,
                hasPublicUsers: true
            }
        case GET_PUBLIC_USERS_FAIL:
                return{
                    ...state,
                    publicusers:payload,
                }
        case GET_RECEIVED_REQUESTS:
            return{
                ...state,
                receivedrequests : payload,
                hasReceivedRequests:true
            }
        case GET_RECEIVED_REQUESTS_FAIL:
                return{
                    ...state,
                    receivedrequests : payload,
                }
        case GET_SENT_REQUESTS:
            return{
                ...state,
                sentrequests: payload,
                hasSentRequests:true
            }
        case GET_SENT_REQUESTS_FAIL:
                return{
                    ...state,
                    sentrequests: payload
                }
        case GET_FRIENDS:
            return{
                ...state,
                friends: payload,
                hasFriends:true
            }
        case GET_FRIENDS_FAIL:
                return{
                    ...state,
                    friends: payload
                }
        case SEND_REQUEST:
            return{
                ...state,
                user:payload
            }
        case ACCEPT_REQUEST:
            return{
                ...state,
                user:payload
            }
        default:
            return state;
        
    }
}