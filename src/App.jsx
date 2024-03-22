import izhFlag from './Flag_of_Izhevsk_(Udmurtia).png';
import rusFlag from './Flag_of_Russia.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>City: Izhevsk</p>
      <p>Country: Russia</p>
      <p>The count of the population: ~620 000</p>
      <p>FLAGS:</p>
      <img src={izhFlag}></img>  
      <img src={rusFlag}></img>  
    </div>
  );
}

export default App;
