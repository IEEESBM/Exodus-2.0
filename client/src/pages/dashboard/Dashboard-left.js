import React from 'react';
import {NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { ButtonToolbar, Button, Toggle, Placeholder } from 'rsuite';
import Modal from 'rsuite/Modal';
import './Dashboard-left.css'
import '../home/home-page.css'
function DashboardLeft() {
  const [open, setOpen] = React.useState(false);
  const [overflow, setOverflow] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { Paragraph } = Placeholder

  return (
    <>
      <div className='dashboard-left'>
      <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to="/"><i class="far fa-bell icon"></i></NavLink>
                    <NavLink to="/"><i class="fab fa-youtube icon "></i></NavLink>
                </li>
                
            </ul>
        </nav>
        <article>
          <div className="modal-container">
          <article className='dashboard-page-buttons'>
            <a onClick={handleOpen}><div>Rules</div></a>
          </article>

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
          </div>
        </article>
        <article className='dashboard-page-buttons'>
          <a href="/submission"><div>Submit</div></a>
        </article>
      </div>
    </>
  );
}

export default DashboardLeft;