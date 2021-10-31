// import 'rsuite/dist/rsuite.min.css';
// import Button from 'rsuite/Button';
import './Dashboard-right.css'
import PublicListData from './Public-list-data';


function DashboardRight() {
  return (
    <>
      <div className='dashboard-right'>
        <h1 className='publicListHeading'>Public List</h1>
        <div className='publicListContainer'>
          {
            PublicListData.map((person) => {
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
                  <div className='send-request'>Send Request</div>
                </div>
                <hr />
                </>
              );
            })
          }
        </div>

        <h1 className='friendsHeading'>Friends</h1>
        <div className='friendsContainer'>
          {
            PublicListData.map((person) => {
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
          {
            PublicListData.map((person) => {
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
                  <div className='accept'>Accept</div>
                  <div className='delete'>Delete</div>
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