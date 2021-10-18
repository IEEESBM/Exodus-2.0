import HomePageBody from "./home-page-body";
import './home-page.css'
import image from '../../images/home-page-image.jpeg';
import stars from '../../images/stars.png';

function App() {
  return (
    <>
      <HomePageBody></HomePageBody>
      <img className='home-page-image' src={image} alt='home-page-image' />
      <img className='stars' src={stars} alt="stars" />
    </>
  );
}

export default App;
