
import './App.css';
import dominik from './media/dominiktcg.jpg';
import jakub from './media/jakub.jpg';
import mucha from './media/mucha.jpg';
import ogramto from './media/ogramto.jpg';
import dorian from './media/dorian.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To jest strona Rodzinki TCG <br></br>
        Niestety jest jeszcze w budowie <br></br>
        Zapraszamy na nasze kanały na yt: <br></br>
        <div>
          <a href="https://www.youtube.com/@Jakub-Kolodziej" 
            target="_blank"
            rel="noreferrer">
              <img src={jakub} alt="jakub" />
          </a>
          <a href="https://www.youtube.com/@DominikTCG"
            target="_blank"
            rel="noreferrer">
              <img src={dominik} alt="dominik" />
          </a>
          <a href="https://www.youtube.com/@Ogramto"             
            target="_blank"
            rel="noreferrer">
              <img src={ogramto} alt="ogramto" />
          </a>
          <a href="https://www.youtube.com/@shadow_pkmn"
            target="_blank"
            rel="noreferrer">
              <img src={dorian} alt="dorian" />
          </a>
          <a href="https://www.youtube.com/@pokemucha"            
            target="_blank"
            rel="noreferrer">
              <img src={mucha} alt="mucha" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
