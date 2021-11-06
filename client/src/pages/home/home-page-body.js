import { ReactComponent as TimerCircles } from '../../images/timer-circles.svg';
import { ReactComponent as TimerColons } from '../../images/timer-colons.svg';
import { ReactComponent as Dhms } from '../../images/dhms.svg';
import Timer from '../home/timer/timer'


function HomePageBody() {
  return (
    <section className='home-page-body'>
      <article className='text-div'>
        Exodus <br /> &lt;/&gt;
      </article>
      <article className='tag-line'>
        We are almost there
      </article>
      <article className='timer'>
          <Timer></Timer>
      </article>
      <button className="noselect button-register">
        Register
      </button>
    </section>
  );
}

export default HomePageBody;
