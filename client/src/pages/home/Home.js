import HomePageBody from "./home-page-body";
import './home-page.css'
import image from '../../images/home-page-image.jpeg';
import Stars from "./stars";
import Navbar from "../../componenets/Nav";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HomePageBody className='home-page-body'></HomePageBody>
      <img className='exodus-image' src={image} alt='home-page-image' />
      <Stars></Stars>
    </>
  );
}

export default App;
