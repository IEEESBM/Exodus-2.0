import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { ButtonToolbar, Button, Toggle, Placeholder } from 'rsuite';
import Modal from 'rsuite/Modal';
import { dashBoardForm } from './DashForm'
const Profile = (props) => {
    const [openID, setOpenID] = React.useState(false);
    const [openName, setOpenName] = React.useState(false);
    const [overflow, setOverflow] = React.useState(true);
    const handleOpenID = () => setOpenID(true);
    const handleOpenName = () => setOpenName(true);
    const handleCloseID = () => setOpenID(false);
    const handleCloseName = () => setOpenName(false);
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
                    {/* <article className='dashboard-page-buttons'> */}
                    <Button onClick={handleOpenID} className="dashboard-btn">Team ID</Button>

                    <Modal overflow={overflow} open={openID} onClose={handleCloseID}>
                        <Modal.Header>
                            <Modal.Title>Team ID </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Team ID</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseID} color ="red" appearance="subtle">
                                close
                            </Button>
                            {/* <Button onClick={handleCloseID} appearance="subtle">
                                Cancel
                            </Button> */}
                        </Modal.Footer>
                    </Modal>

                    <Button onClick={handleOpenName} className="dashboard-btn">Team Name</Button>
                    <Modal overflow={overflow} open={openName} onClose={handleCloseName}>
                        <Modal.Header>
                            <Modal.Title>Team Name </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Team Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseName} color ="red" appearance="subtle">
                                close
                            </Button>
                            {/* <Button onClick={handleCloseName} appearance="subtle">
                                Cancel
                            </Button> */}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Profile;
