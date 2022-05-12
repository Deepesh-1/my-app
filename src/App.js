//import logo from './images/logo.svg';
import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';
import Card from './components/Card';
import swim from './images/swim-suit.png'
import wedding from './images/wedding-photography.png'
import bike from './images/mountain-bike.png'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroComponent/>
    <div className="Card">
    < Card img={swim} rating="5.0(6)" message="Life lessons with Katie Zaferes" price="136" />
    < Card img={wedding} rating="5.0(30)" message="Learn wedding photography" price="125" />
    < Card img={bike} rating="4.8(2)" message="Group Mountain Biking" price="50" />
    </div>

    </div>
    // <div className="App">
     
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
       
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
