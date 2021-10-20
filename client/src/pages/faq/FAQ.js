import React from "react";
import FaqBody from "./faq-body";
import { ReactComponent as Drone } from '../../images/drone.svg';
import './faq.css'

const FAQ = () => {
  return (
    <>
      <Drone className='drone'></Drone>
      <div className='faq-heading'>
        FAQ
      </div>
      <FaqBody></FaqBody>
    </>
  )
}

export default FAQ