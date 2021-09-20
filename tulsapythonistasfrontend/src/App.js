import logo from './TulsaPythonistasLogo.png';
import './App.css';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <div className="App">
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
