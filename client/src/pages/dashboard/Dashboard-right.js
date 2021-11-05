// import 'rsuite/dist/rsuite.min.css';
// import Button from 'rsuite/Button';
import { useSelector ,useDispatch} from 'react-redux';
import './Dashboard-right.css'
import PublicListData from './Public-list-data';
import {acceptRequest, getFriends, getPublicUsers, getReceivedRequests, getSentRequests, sendRequest} from "../../actions/connection";
import { useEffect, useState } from 'react';


function DashboardRight() {
  const {publicusers,hasPublicUsers,friends,hasFriends,receivedrequests,hasReceivedRequests,sentrequests,hasSentRequests} = useSelector((state)=>{
    //console.log(state.connection);
    return state.connection});
  const {isAvailable,setAvailable} = useState(true);
  const dispatch = useDispatch();


  const getPublicData = async()=>{
    await dispatch(getPublicUsers()).then((publicusers)=>{
      
      if(publicusers!=undefined && publicusers.length>0){
        setAvailable(true);
        console.log(true);
      }
      
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  //after integratong auth, remove
  const currentUserId = "617f84a2e29435f1505ca13e";

  const sendReq = (currentUserId,id)=>{
    dispatch(sendRequest(currentUserId,id)).then(()=>{
      console.log('Sent request');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const acceptReq = (id,currentUserId)=>{
    console.log(id);
    dispatch(acceptRequest(id,currentUserId)).then(()=>{
      console.log('Request Accepted');
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  const getFriendList = async(id)=>{
    await dispatch(getFriends(id)).then((friends)=>{
      console.log(friends);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const sentRequests = (id)=>{
    dispatch(getSentRequests(id)).then((sentrequests)=>{
      console.log(sentrequests);
      // window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const receivedRequests = async(id)=>{
    await dispatch(getReceivedRequests(id)).then((receivedrequests)=>{
      console.log(receivedrequests);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(async ()=>{
    await getPublicData();
    // console.log(publicusers.length);
    await getFriendList(currentUserId);
    await receivedRequests(currentUserId);
    await sentRequests(currentUserId);
  },[]);

  
  return (
    <>
      <div className='dashboard-right'>
        <h1 className='publicListHeading'>Public List</h1>
        <div className='publicListContainer'>
          {/* {isAvailable && ( */}
            {hasPublicUsers && publicusers.map((person,i) => {
              return (
                <>
                <div className="person">
                  <div>
                    <img src={person.imageSrc} alt="profile" className='profile-photo' />
                  </div>
                  <div className='details'>
                    <p className='user-name'>{person.username}</p>
                    <a className='discord-id'>{person.discordID}</a>
                  </div>
                  <div className='send-request' onClick={()=>sendReq(currentUserId,person._id)}>Send Request</div>
                </div>
                <hr />
                </>
              );
            // })
              })

          }
        </div>

        <h1 className='friendsHeading'>Friends</h1>
        <div className='friendsContainer'>
          {hasFriends &&
            friends.map((person) => {
              return (
                <>
                <div className="person">
                  <div>
                    <img src={person.imageSrc} alt="profile photo" className='profile-photo' />
                  </div>
                  <div className='details'>
                    <p className='user-name'>{person.username}</p>
                    <a className='discord-id'>{person.discordID}</a>
                  </div>
                  <div className='remove-friend'>Remove Friend</div>
                </div>
                <hr />
                </>
              );
            })
          }
        </div>

        <h1 className='requestsHeading'>Friend Requests</h1>
        <div className='requestsContainer'>
          {hasReceivedRequests &&
            receivedrequests.map((person) => {
              return (
                <>
                <div className="person">
                  <div>
                    <img src={person.imageSrc} alt="profile photo" className='profile-photo' />
                  </div>
                  <div className='details'>
                    <p className='user-name'>{person.username}</p>
                    <a className='discord-id'>{person.discordID}</a>
                  </div>
                  <div className='accept' onClick={()=>acceptReq(currentUserId,person._id)}>Accept</div>
                  {/* <div className='delete'>Delete</div> */}
                </div>
                <hr />
                </>
              );
            })
          }
        </div>

        <h1 className='requestsHeading'>Requests Sent</h1>
        <div className='requestsContainer'>
          {hasSentRequests &&
            sentrequests.map((person) => {
              return (
                <>
                <div className="person">
                  <div>
                    <img src={person.imageSrc} alt="profile" className='profile-photo' />
                  </div>
                  <div className='details'>
                    <p className='user-name'>{person.username}</p>
                    <a className='discord-id'>{person.discordID}</a>
                  </div>
                  {/* <div className='delete'>Delete</div> */}
                </div>
                <hr />
                </>
              );
            })
          }
        </div>

      </div>
    </>
  );
}

export default DashboardRight;