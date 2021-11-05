import Card from './component/Card';
import perc from '../../images/rocket.svg';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import './Dashboard-center.css'
import { createTeam, joinTeam,getTeam,leaveTeam,deleteTeam } from '../../actions/dashboard';
function DashboardCenter() {
        //remove after auth integration
    //     const userId = "617f84aee29435f1505ca140";
    // const [hasTeam,setHasTeam] = useState(false);
    // const dispatch = useDispatch();
    // const {team} = useSelector(state=>state.dashboard);

    // const getTeamData =async (id)=>{
    //     await dispatch(getTeam(id))
    //     .then((team)=>{
    //         if(team!==undefined){
    //             setHasTeam(true);
    //         }
    //         console.log(team);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
    // useEffect(async()=>{
    //     console.log('Profile');
    //     getTeamData({id:userId});
    //     console.log(team);
    //     if(team!=undefined){
    //         setHasTeam(true);
           
    //     }
    // },[])
    return (
      <>
        <div className='dashboard-center'>
            
            {/* -------------- Navbar -------------- */}
            <Navbar />

            {/* -------------- User details --------------- */}
            <div className="row">
                <Profile imgsrc={perc}/>
            </div>
            

            {/* -------------- Cards --------------- */}
            <div className="row cards-section">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={perc} bgcolor="#3B6BF0" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores." />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={perc} bgcolor="#7033FF" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores." />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={perc} bgcolor="#F65164" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores." />
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default DashboardCenter;