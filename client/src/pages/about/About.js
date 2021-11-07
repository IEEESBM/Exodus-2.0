import AboutPageBody from "./about-page-body";
import './about-page.css'
import paraimage1 from '../../images/aboutParaImg1.png';
import paraimage2 from '../../images/aboutParaImg2.png';
import Nav from '../../componenets/Nav';
// import Timeline from "../dashboard/component/Timline";
function App() {
  return (
    <>
      <Nav />
      <AboutPageBody></AboutPageBody>
      <img className='aboutPageParaImg1' src={paraimage1} alt='about-page-image1' />
      {/* <img className='aboutPageParaImg2' src={paraimage2} alt='about-page-image2' /> */}
{/* <Timeline/> */}
    </>
  );
}

export default App;
