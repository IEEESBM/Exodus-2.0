import HomePageBody from "./home-page-body";
import './home-page.css'
import image from '../../images/home-page-image.jpeg';
import Stars from "./stars";
import Nav from '../../componenets/Nav';
function App() {
  return (
    <>
    <Nav/>
      <HomePageBody className='home-page-body'></HomePageBody>
      <img className='home-page-image' src={image} alt='home-page-image' />
      <Stars></Stars>
    </>
  );
}

export default App;