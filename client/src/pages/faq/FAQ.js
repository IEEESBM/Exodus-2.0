import React from "react";
import FaqBody from "./faq-body";
import { ReactComponent as Drone } from '../../images/drone.svg';
import './faq.css'
import Navbar from "../../componenets/Nav";

const FAQ = () => {
  return (
    <>
      <Navbar></Navbar>
      <Drone className='drone'></Drone>
      <div className='faq-heading'>
        FAQ
      </div>
      <FaqBody></FaqBody>
    </>
  )
}

export default FAQ