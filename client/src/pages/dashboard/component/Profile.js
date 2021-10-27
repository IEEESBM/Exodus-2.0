import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { ButtonToolbar, Button, Toggle, Placeholder } from 'rsuite';
import Modal from 'rsuite/Modal';
import { dashBoardForm } from './DashForm'
const Profile = (props) => {
    const [open, setOpen] = React.useState(false);
    const [overflow, setOverflow] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen(false);
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
                    <article className='dashboard-page-buttons'>
                        <a onClick={handleOpen}><div>Team Id</div></a>

                        <Modal overflow={overflow} open={open} onClose={handleClose}>
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
                                <Button onClick={handleClose} appearance="primary">
                                    Ok
                                </Button>
                                <Button onClick={handleClose} appearance="subtle">
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <a onClick={handleOpen}><div>Team Name</div></a>
                        <Modal overflow={overflow} open={open} onClose={handleClose}>
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
                                <Button onClick={handleClose} appearance="primary">
                                    Ok
                                </Button>
                                <Button onClick={handleClose} appearance="subtle">
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Profile;
