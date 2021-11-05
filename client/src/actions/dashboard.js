import DashboardService from "../services/dashboard.service";
import {
    GET_USER,
    GET_TEAM,
    GET_TEAM_FAIL,
    CREATE_TEAM,
    JOIN_TEAM,
    LEAVE_TEAM,
    DELETE_TEAM,
    JOIN_TEAM_FAIL,
    CREATE_TEAM_FAIL
} from "./types";

// export const getUser = (id)=>{
//     async(dispatch)=>{
//         try{
//             const res = await DashboardService.getUser(id);
//             dispatch({
//                 type:GET_USER,
//                 payload:res.data
//             })
//         }
//         catch(err){
//         console.log(err);
//         }
//     }
// }

export const getTeam = ()=>
    async(dispatch)=>{
        try{
            console.log('GEt team action');
            const res = await DashboardService.getTeam();

            console.log(res);
            // if(!res){
            //     console.log('res undefined');
            //     dispatch({
            //         type:GET_TEAM_FAIL,
            //         payload:undefined
            //     })
            // }else{
                dispatch({
                    type:GET_TEAM,
                    payload:res
                    })
                // }
            
        }
        catch(err){
            dispatch({
                type:GET_TEAM_FAIL,
                payload:undefined
            })
            console.log(err);
        }
    
}

export const createTeam = (teamName)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.createTeam(teamName);
            if(res){
                dispatch({
                    type:CREATE_TEAM,
                    payload:res
                    })
            }
            else{
                dispatch({
                    type:CREATE_TEAM_FAIL,
                    payload:undefined
                })
            }
            
        }
        catch(err){
            dispatch({
                type:CREATE_TEAM_FAIL,
                payload:undefined
            })
            console.log(err);
        }
    
}

export const joinTeam = (teamId)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.joinTeam(teamId);
          if(res){
            dispatch({
                type:JOIN_TEAM,
                payload:res
                })
          }
          else{
              console.log('Action join fail');
              dispatch({
                  type:JOIN_TEAM_FAIL,
                  payload:undefined
              })
          }

        }
        catch(err){
            dispatch({
                type:JOIN_TEAM_FAIL,
                payload:undefined
            })
        }
    
}

export const leaveTeam = (teamId)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.leaveTeam(teamId);
            console.log(res);
            dispatch({
                type:LEAVE_TEAM,
                payload:res
                })
        }
        catch(err){
            console.log(err);
        }
    
}

export const deleteTeam = (teamId)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.deleteTeam(teamId);
            dispatch({
                type:DELETE_TEAM,
                payload:res.data
                })
        }
        catch(err){
            console.log(err);
        }
    
}