import Card from './component/Card';
import perc from '../../images/rocket.svg';
import Navbar from './component/Navbar';
import Profile from './component/Profile';

function DashboardCenter() {
    return (
      <>
        <div className='dashboard-center'>
            
            {/* -------------- Navbar -------------- */}
            <Navbar />

            {/* -------------- User details --------------- */}
            <div className="row">
                <Profile imgsrc={perc}/>
            </div>
            

            {/* -------------- Cards --------------- */}
            <div className="row cards-section">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={perc} bgcolor="#3B6BF0" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores." />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={perc} bgcolor="#7033FF" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores." />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card imgsrc={perc} bgcolor="#F65164" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores." />
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default DashboardCenter;