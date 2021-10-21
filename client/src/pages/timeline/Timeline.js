import React from "react";
import './Timeline.css';
import { ReactComponent as TimelineBody } from '../../images/timeline-body.svg';
import { ReactComponent as Rocket } from '../../images/rocket.svg';
import { ReactComponent as TimelineBodyMobile } from '../../images/timeline-body-mobile.svg';


const Timeline = () => {
  return (
    <>
      <div className='heading'>TIMELINE OF THE EVENT</div>
      <TimelineBody className='timeline-body-svg'></TimelineBody>
      <TimelineBodyMobile className='timeline-body-mobile-svg'></TimelineBodyMobile>
      <Rocket className='rocket-svg'></Rocket>
    </>
  )
}

export default Timeline;