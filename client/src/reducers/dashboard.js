import{
    CREATE_TEAM,
    GET_USER,
    LEAVE_TEAM,
    GET_TEAM,
    DELETE_TEAM,
    JOIN_TEAM,
    GET_TEAM_FAIL,
    JOIN_TEAM_FAIL,
    CREATE_TEAM_FAIL
} from "../actions/types";

const initialState = {
    user:{},
    team:{},
    isTeam:false,
    isTeamLeader:false
}
export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_USER:
            return{
                ...state,
                user:payload
            }
        case GET_TEAM:
            console.log('GET_TEAM');
            console.log(payload);
            return{
                ...state,
                team:payload.team[0],
                isTeam:true,
                isTeamLeader:payload.teamLeader
            }
        case GET_TEAM_FAIL:
            return{
                ...state,
                team:payload,
                isTeam:false
            }
        case CREATE_TEAM:
            return{
                ...state,
                team:payload,
                isTeam:true
            }
        case CREATE_TEAM_FAIL:
            return{
                ...state,
                team:payload,
            }
        case JOIN_TEAM:
            return{
                ...state,
                team:payload,
                isTeam:true,
                isTeamLeader:false
            }
        case JOIN_TEAM_FAIL:{
            return{
                ...state,
                team:payload,
                isTeam:false,
                isTeamLeader:false
            }
        }
        case LEAVE_TEAM:
            return{
                ...state,
                team:payload,
                isTeam:false
            }
        case DELETE_TEAM:
            return{
                ...state,
                team:payload
            }
        default:
            return state;
    }
}