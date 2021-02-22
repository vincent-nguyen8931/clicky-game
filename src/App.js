import logo from './logo.svg';
import './App.css';
import characters from "./characters.json";


function App() {
  return (
    <container>
      <row>
        <div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 10rem)", gridGap: 15 }}>
          {characters.map(character => (
         < img src={character.image} style={{ height: "128px" }}/>
         ))}
          {/* <img src={character.image} style={{ height: "128px" }}/>
         < img src={character.image} style={{ height: "128px" }}/> */}
          </div>
         


          <p>Text there</p>
        </div>

      </row>
    </container>

  );
}

export default App;
