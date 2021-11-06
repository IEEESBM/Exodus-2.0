// import { ReactComponent as Aboutimg1 } from '../../images/aboutPagePara1Img.svg'
// import { ReactComponent as Aboutimg2 } from '../../images/aboutPagePara2Img.svg'

import { ReactComponent as TimerColons } from '../../images/timer-colons.svg';
import { ReactComponent as Dhms } from '../../images/dhms.svg';

function AboutPageBody() {
  return (
    <section className='about-page-body'>
      <article className='about-heading'>
        ABOUT EXODUS
      </article>
      <article>
      {/* <Aboutimg1 className="about-para1-img"></Aboutimg1> */}
      </article>
      <article className='about-para-1'>
      For all the front-end web devs out there, IEEE Student Branch Manipal brings a wonderful opportunity in the form of EXODUS-an online front web development challenge where participants will have to use their skills in HTML, CSS and JavaScript to develop websites that revolve around the theme of helping humanity move to another planet in the future. EXODUS is as inclusive as it gets where people who are new to front-end development can also participate and hone their newly learned skills. 
      <br/><br/> 
      Cash prizes for the top three winners. 
      <br/>This challenge is open to all college students. 
      
      </article>
      <article>
      {/* <Aboutimg2 className="about-para2-img"></Aboutimg2> */}
      </article>
      {/* <article className='about-para-2'>
      Cash prizes for the top three winners. 
      <br/>This challenge is open to all college students. 
      </article> */}
      
    </section>
  );
}

export default AboutPageBody;