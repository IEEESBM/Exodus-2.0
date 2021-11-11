import Card from './component/Card';
import perc from '../../images/rocket.svg';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import './Dashboard-center.css'
import { createTeam, joinTeam,getTeam,leaveTeam,deleteTeam } from '../../actions/dashboard';
import theme1 from '../../images/theme1.png';
import theme2 from '../../images/theme2.png';
import theme3 from '../../images/theme3.png';


function DashboardCenter() {

    console.clear();

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});

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
                    <Card imgsrc={theme1} bgcolor="#3B6BF0" title="Interplanetary Airline" cardtext=
                    " With the expanse of the space time continuum, the need for space travel agencies have arisen. Make a website for booking an interplanetary flight.  Plan a trip for your customers showcasing destinations and flight option along with prices and services offered. There should be a final receipt that shows flight details and total price clearly."
                    // " Plan a trip for your customers showcasing destinations and flight option along with prices and services offered. Your final bill should show the total price clearly" 
                />
                    </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={theme2} bgcolor="#7033FF" title="Cryopreservation" cardtext=
                    "Humans, in order to extend their lineage have decided on sending its species to the future by the means of frozen gametes which can be used to give birth to human species in the future. Make a website where people can register themselves, book a slot and ensure that their genes do get passed onto the next generation by paying a certain price.There should be a final receipt that contains total price. "
                    // "The human race, in order to extend its lineage has decided on sending its species in the future by the means of frozen gametes which can be used to give birth to human species in the future. Make a website where people can register themselves and ensure that their genes do get passed onto the next generation by paying a certain price. Make a live slot counter where the number of slots decrease with time. The receipt should contain total price. " 
                />
                    </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={theme3} bgcolor="#F65164" title="Cure-it-all Pharmacy" cardtext=
                    "In the future, the cure to all the diseases prevalent today has been found in the form of capsules. The capsules for various diseases vary in price. The prices along with the name of the disease the capsule cures should be listed. Option for adding multiple capsules should be given. There should be a final receipt that should clearly show the total price of all the capsules."
                    // "In the future, the cure to most of the diseases has been found in the form of capsules. Capsule price should be mentioned clearly and user should be given the option to buy multiple capsules. The receipt should show total price of medicines." 
               />
                    </div>
            </div>
        </div>
      </>
    );
  }
  
  export default DashboardCenter;