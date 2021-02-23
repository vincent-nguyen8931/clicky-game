import './App.css';
import Footer from "./components/Footer";
import characters from "./characters.json";

var handleClick = () => {
  console.log("hello")
}

// randomize the id in the json by making an array with the length of the json array.
var randomizePicture = () => {
  var arr = []
  var temp, randomIndex = 0;
  for (var i = 1; i < characters.length; i++){
    arr.push(characters.id)
  }
  for (var j = 0; j < arr.length; j++){
    randomIndex = Math.floor(Math.random() * arr.length - 1)
    temp = arr[j];
    arr[j+1] = temp;
    arr[j] = randomIndex;
  }
return arr;
}

function App() {
  return (
    <container>
      <row>
        <div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 10rem)", gridGap: 15, marginLeft: "10rem", marginTop: "5rem"}}>
          {characters.map(character => (
         < img src={character.image} style={{ height: "128px" }} onClick={handleClick}/>
         ))}
          </div>
          <p>Text there</p>
          <Footer />
        </div>

      </row>
    </container>

  );
 
}

export default App;
