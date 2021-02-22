import logo from './logo.svg';
import amy from "./img/Amy.png"
import './App.css';
import characters from "./characters.json";


function App() {
  return (
    <container>
      <row>
        <div>
          {characters.map(character => (
            <img src={character.image} style={{height:"128px"}}/>
          ))}



          <p>Text there</p>
        </div>

      </row>
    </container>

  );
}

export default App;
