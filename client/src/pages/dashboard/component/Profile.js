import React from 'react';

const Profile = (props) => {
    return (
        <div className="user d-flex flex-row justify-content-center align-items-center">
            <div className="profile-pic">
                <span className="img-border">
                    <img className="user-pic" src={props.imgsrc} alt="profile pic" />
                </span>
            </div>
            <div className="user-details">
                <h3>Information</h3>
                <p className="user-name">Admin</p>
                <div className="user-team">
                    <a href="#" className="team-link">Team xyz</a>
                    <a href="#" className="team-link">Team xyz</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
