import HomePageBody from "./home-page-body";
import './home-page.css'
import image from '../../images/home-page-image.jpeg';
import Stars from './stars'

function App() {
  return (
    <>
      <HomePageBody></HomePageBody>
      <img className='home-page-image' src={image} alt='home-page-image' />
      <Stars ></Stars>
    </>
  );
}

export default App;
