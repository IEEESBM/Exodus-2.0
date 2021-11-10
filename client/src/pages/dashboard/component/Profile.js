import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { ButtonToolbar, Button, Toggle, Placeholder } from 'rsuite';
import Modal from 'rsuite/Modal';
import { dashBoardForm } from './DashForm';
import { Redirect } from 'react-router-dom';

import { useSelector ,useDispatch} from 'react-redux';
import { useState ,useEffect} from 'react';
import { createTeam, joinTeam,getTeam,leaveTeam,deleteTeam } from '../../../actions/dashboard';
import { getUser } from '../../../actions/auth';

const Profile = (props) => {
    const [openID, setOpenID] = useState(false);
    const [openName, setOpenName] = useState(false);
    const [overflow, setOverflow] = useState(true);
    const [userId,setUserId] = useState("");
    const [pocEmail,setPocEmail] = useState("");
    const { isLoggedIn } = useSelector(state => state.auth);

    const handleOpenID = () => setOpenID(true);
    const handleOpenName = () => setOpenName(true);
    const handleCloseID = () => setOpenID(false);
    const handleCloseName = () => setOpenName(false);

    const [teamID,setTeamID] = useState("");
    const [teamName,setTeamName] = useState("");

    const dispatch = useDispatch();
    const [hasTeam,setHasTeam] = useState(false);
    const {team,isTeam,isTeamLeader} = useSelector(state=>{
        //console.log(state.dashboard.team);
        return state.dashboard});
    const {userData,isUser} = useSelector((state)=>state.auth);

    const onChangeTeamId = (e) =>{
        const teamid = e.target.value;
        // console.log("Team ",teamid);
        setTeamID(teamid);
    }
    const onChangeTeamName = (e)=>{
        const teamname = e.target.value;
        setTeamName(teamname);
    }


    const handleJoinID = async(teamID)=>{
        
        await dispatch(joinTeam(teamID))
        .then(async()=>{
            console.log('Joined Team');
            await getTeamData(userId);
            if(isTeam){
                setHasTeam(true);
            }
            else{
                setHasTeam(false);
            }
            setOpenID(false);
            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    const handleCreateTeam = async(teamName)=>{
        await dispatch(createTeam(teamName))
        .then(async()=>{
            
            console.log('Team Created');
            await getTeamData(userId);
        })
        .catch((err)=>{
            console.log(err);
        })
        setOpenName(false);
    }
    

    const getTeamData =async ()=>{
        await dispatch(getTeam())
        .then(()=>{
            // console.log(isTeam);
            if(!isTeam){
                setHasTeam(false);
            }
            else{
                setHasTeam(true);
                setUserId(userData._id);
                setPocEmail(userData.email);
            }
            // console.log(team);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const leaveteam = async(teamID)=>{
        setHasTeam(false);
        await dispatch(leaveTeam(teamID))
        .then(()=>{
            console.log('Leave team');
           
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const deleteteam = async(teamID)=>{
        setHasTeam(false);
        await dispatch(deleteTeam(teamID))
        .then(async()=>{
            
            // await getTeamData(userId);
            console.log('Delete team');
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const getUserData = async()=>{
        await dispatch(getUser())

    }
    // if(!isLoggedIn){
    //     return <Redirect to="/login"/>
    // }
    useEffect(async()=>{
        // console.log('Profile');
        
        await getUserData();
        await getTeamData();
    //    if(isUser){
    //     setUserId(userData._id);
    //     setPocEmail(userData.email);
    //    }
        // console.log(team);
        if(!isTeam){
            setHasTeam(false);
        }
        else{
            setHasTeam(true);
        }
       
        // console.log("isTeam:"+isTeam);
    },[isTeam])

    return (
        
        <div className="user d-flex flex-row justify-content-center align-items-center">
            <div className="profile-pic">
                <span className="img-border">
                    <img className="user-pic" src={props.imgsrc} alt="profile pic" />
                </span>
            </div>
            <div className="user-details">
                {isUser && (
                    <>
                    <h3 className="prof-h">User Information</h3>
                <p className="user-name">Name : {userData.name}</p>
                <p className="user-name">Email : {userData.email}</p>
                <p className="user-name">College : {userData.college}</p>
                <p className="user-name">Mobile No : {userData.phoneno}</p>
                </>
                )}
                
                {hasTeam &&(
 <div className="team-details">
     <h3 className="prof-h">Team Information</h3>
 <p className="user-name">Team Name : {team.teamName}</p>
 <p className="user-name">Team ID: {team.teamID}</p>
{!isTeamLeader &&(
    <Button className="team-btn" onClick={()=>leaveteam(team.teamID)}>Leave Team</Button>
)}
 {isTeamLeader && (
    <Button className="team-btn" onClick={()=>deleteteam(team.teamID)}>Delete Team</Button>
 )}
 
</div>
                )}
               {!hasTeam &&(
 <div className="user-team">
 {/* <article className='dashboard-page-buttons'> */}

 <Button onClick={handleOpenID} className="profile-dashboard dashboard-btn">Join Team</Button>

 <Modal overflow={overflow} open={openID} onClose={handleCloseID}>
     <Modal.Header>
         <Modal.Title>Join Team </Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <div class="mb-3">
             <label htmlFor="exampleInputEmail1" class="form-label">Team ID</label>
             <input type="text" value={teamID} onChange={onChangeTeamId} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>

     </Modal.Body>
     <Modal.Footer>
         <Button onClick={()=>handleJoinID(teamID)} color ="red" appearance="subtle">
             Join
         </Button>
         {/* <Button onClick={handleCloseID} appearance="subtle">
             Cancel
         </Button> */}
     </Modal.Footer>
 </Modal>
<br />
 <Button onClick={handleOpenName} className="profile-dashboard dashboard-btn">Create Team</Button>
 <Modal overflow={overflow} open={openName} onClose={handleCloseName}>
     <Modal.Header>
         <Modal.Title>Create Team </Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <div class="mb-3">
             <label htmlFor="exampleInputEmail1" class="form-label">Team Name</label>
             <input type="text" value={teamName} onChange={onChangeTeamName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>

     </Modal.Body>
     <Modal.Footer>
         <Button onClick={()=>handleCreateTeam(teamName)} color ="red" appearance="subtle">
             Submit
         </Button>
         {/* <Button onClick={handleCloseName} appearance="subtle">
             Cancel
         </Button> */}
     </Modal.Footer>
 </Modal>

</div>
               )}
               
            </div>
        </div>
       
    )
}

export default Profile;
