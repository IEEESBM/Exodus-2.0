import './App.css';
import Nav from './componenets/Nav';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Submission from './pages/Submission'
import FAQ from './pages/FAQ'
function App() {
  return (
    <>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/sub" component={Submission}/>
          <Route exact path="/faq" component={FAQ}/>
        </Switch>
    </>
  );
}

export default App;
