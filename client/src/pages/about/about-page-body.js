// import { ReactComponent as Aboutimg1 } from '../../images/aboutPagePara1Img.svg'
// import { ReactComponent as Aboutimg2 } from '../../images/aboutPagePara2Img.svg'

import { ReactComponent as TimerColons } from '../../images/timer-colons.svg';
import { ReactComponent as Dhms } from '../../images/dhms.svg';

function AboutPageBody() {
  return (
    <section className='about-page-body'>
      <article className='about-heading'>
        ABOUT THE EVENT
      </article>
      <article>
      {/* <Aboutimg1 className="about-para1-img"></Aboutimg1> */}
      </article>
      <article className='about-para-1'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </article>/
      
      <article>
      {/* <Aboutimg2 className="about-para2-img"></Aboutimg2> */}
      </article>
      <article className='about-para-2'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </article>
      
    </section>
  );
}

export default AboutPageBody;