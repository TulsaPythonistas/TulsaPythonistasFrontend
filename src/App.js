import logo from './TulsaPythonistasLogo.png';
import './App.css';
import Fade from 'react-reveal/Fade';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/events' component={Events}/>
        </Switch>
      </Router>
      <header className="App-header">
        <Fade delay={1500}>
           <h1 className="feature-text fade-in">Tulsa Pythonistas</h1>
        </Fade>
        <Fade duration={1500}>
          <img src={logo} className="App-logo fade-in-image" alt="logo" />
        </Fade>
        <Fade delay={3000}>
          <h3 className="sub-feature-text">Coming Soon</h3>
        </Fade>
      </header>
    </div>
  );
}

export default App;
