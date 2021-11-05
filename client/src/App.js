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

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/submission" component={Submission} />
      </Switch>
    </>
  );
}

export default App;
