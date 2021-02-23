import './App.css';
import Footer from "./components/Footer";
import characters from "./characters.json";


// count to be utilized when giving the user a score. 
var count = 0;

// Will read the clicks of the user, and increment the count if the image is the correct one, otherwise will make the user lose the game with corresponding message. With this test, I confirmed that an event listener has been placed on every image and will respond with the below console logs. 
var handleClick = () => {
console.log("Hello");
console.log(count++);

// another way I attempted at randomizing the images
//   // characters.sort = (a,b) => {
//   //   return 0.5 - Math.random();
}

// randomize the id in the json by making an array with the length of the json array. This method causes a crash in the app but I believe this can be made to work.
// var randomizePicture = () => {
 
// }

  /*
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
  */

// additional components will have to be made for the navbar, and header. The score, title, and game name would be placed inside of the navbar. 

function App() {
  return (
    <container>
      <row>
        <div>
          {/* This grid styling is used to get the images placed in 4 x 3 design. */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 10rem)", gridGap: 15, marginLeft: "10rem", marginTop: "5rem"}}>
            {/* This map will run through the characters and display each image that exists in the object. The idea with the randomizer is to randomize the id's prior to reaching this map function. Once here, the map function will utilize the created array of ids instead of the ones that exist in the characters.json  */}
          {characters.map(character => (
         < img src={character.image} style={{ height: "128px" }} onClick={handleClick}/>
         ))}
          </div>
          <p>Text here</p>
          <Footer />
        </div>

      </row>
    </container>

  );
 
}

export default App;
