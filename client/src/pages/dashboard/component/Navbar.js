import React from 'react';
import { NavLink } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import { ButtonToolbar, Button, Toggle, Placeholder } from 'rsuite';
import Modal from 'rsuite/Modal';
function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [overflow, setOverflow] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { Paragraph } = Placeholder;
    return (
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to="/"><i className="fas fa-home nav-icons"></i></NavLink>
                    <NavLink to="/"><i class="fas fa-meteor nav-icons"></i></NavLink>
                    <NavLink to="/"><i class="fas fa-user-astronaut nav-icons"></i></NavLink>
                </li>

            </ul>
            <ul className="nav-item">
                <a onClick={handleOpen} className="dashboard-btn">Rules</a>

                <Modal overflow={overflow} open={open} onClose={handleClose} >
                    <Modal.Header appearance="primary">
                        <Modal.Title >Rules </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Paragraph rows={80} />
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
                <a href="/submission"className="dashboard-btn">Submission</a>
                <i class="fas fa-wallet nav-icons"></i>
                <span className="navbar-score"> 999999 $</span>
            </ul>
        </nav>
    )

}

export default Navbar;

