import Nav from './componenets/Nav';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Submission from './pages/Submission'
import FAQ from './pages/faq/FAQ'
import Timeline from './pages/timeline/Timeline';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/submission" component={Submission}/>
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/timeline" component={Timeline}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
    </>
  );
}

export default App;
