import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './componenets/Nav';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About'
import FAQ from './pages/faq/FAQ'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Submission from './pages/submission/Submission';
import Verify from "./pages/Verify";
import styled from 'styled-components';
import ResponsiveScreen from "./responsive";

const Wrapper= styled.div`
  box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;


require('dotenv').config();

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/submission" component={Submission} /> */}
        <Route exact path="/verification/:token" component={Verify}/>
      </Switch>
      </Wrapper>
      <ResponsiveScreen />
    </>
  );
}

export default App;
