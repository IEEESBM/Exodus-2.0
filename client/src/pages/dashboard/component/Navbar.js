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
                    <NavLink to="/about"><i className="fas fa-meteor nav-icons"></i></NavLink>
                    <NavLink to="/faq"><i className="fas fa-user-astronaut nav-icons"></i></NavLink>
                </li>

            </ul>
            <ul className="nav-item">
               <a onClick={handleOpen} className="dashboard-btn">Rules</a>

                <Modal className="rule-m" overflow={overflow} open={open} onClose={handleClose} >
                    <Modal.Header appearance="primary">
                        <Modal.Title >Rules </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <ul>
                        <li>The event will take place for 3 days (12th to 14th November 2021).</li>
                        <li> Only HTML, CSS and JavaScript can be used. No other frameworks are permitted. If a team is found to have used a framework, they would be immediately disqualified from this competition.</li>
                    	<li>You will be given a set of features to be implemented in your website.</li>
                        <li> You have to incorporate the theme in the best possible way in your website. </li> 
                        <li> Event ends at 11:59 PM sharp on 14th of November. </li>
                        <li> You will be judged on how well you implement the given tasks. Judging Criteria is explained below. </li>
                        <li> Results shall be announced within 7 days from 14th of November via Instagram handle of IEEE SBM (@ieeesbm) </li>
                        <li> Cash prizes are to be won by the best performing teams, along with Instagram shout out to the top 5 teams.</li>
                        <li> In case of any discrepancy, the authority to take the final decision lies with IEEE SBM.</li>
                    </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button onClick={handleClose} appearance="primary">
                            Ok
                        </Button> */}
                        <Button onClick={handleClose} color ="red" appearance="subtle">
                            close
                        </Button>
                    </Modal.Footer>
                </Modal>
            
                <a href="/submission"className="dashboard-btn">Submission</a>
               
    
        </ul>
        </nav>
    )

}

export default Navbar;

