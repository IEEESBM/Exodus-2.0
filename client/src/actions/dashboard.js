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
    CREATE_TEAM_FAIL,
    SUBMIT_WEBSITE,
    SUBMIT_WEBSITE_FAIL,
    SET_MESSAGE
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
            // console.log('GEt team action');
            const res = await DashboardService.getTeam();

            // console.log(res);
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
            // console.log(err);
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
            // console.log(err);
        }
    
}

export const joinTeam = (teamID)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.joinTeam(teamID);
          if(res){
            dispatch({
                type:JOIN_TEAM,
                payload:res
                })
          }
          else{
            //   console.log('Action join fail');
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

export const leaveTeam = (teamID)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.leaveTeam(teamID);
            // console.log(res);
            dispatch({
                type:LEAVE_TEAM,
                payload:res
                })
        }
        catch(err){
            // console.log(err);
        }
    
}

export const deleteTeam = (teamID)=>
    async(dispatch)=>{
        try{
            const res = await DashboardService.deleteTeam(teamID);
            dispatch({
                type:DELETE_TEAM,
                payload:res.data
                })
        }
        catch(err){
            // console.log(err);
        }
    
}

// export const submitWebsite = (repoLink,websiteLink,details,topic) =>
//     async(dispatch)=>{
//         try{
//             const res = await DashboardService.submitWebsite(repoLink,websiteLink,details,topic);
//             // if(res){
//                 console.log(res);
//                 dispatch({
//                     type:SUBMIT_WEBSITE,
//                     payload:res
//                 })
//                 dispatch({
//                     type:SET_MESSAGE,
//                     payload:res.data.message
//                 })
//             // }
//         }
//         catch(error){
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//             console.log(error);
//         }
//     }

export const submitWebsite = (repoLink,websiteLink,details,topic) =>
    (dispatch)=>{
        return DashboardService.submitWebsite(repoLink,websiteLink,details,topic).then(
            (response)=>{
                // console.log(response);
                dispatch({
                    type:SUBMIT_WEBSITE,
                    payload:response.data.updatedTeam
                });
                dispatch({
                    type:SET_MESSAGE,
                    payload:response.data.message
                });
                return Promise.resolve();
            },
            (error)=>{
                const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
            // console.log(error);
            dispatch({
                type:SUBMIT_WEBSITE_FAIL,
                payload:undefined
            })
            dispatch({
                type:SET_MESSAGE,
                payload:message
            })
            }
        )
    }