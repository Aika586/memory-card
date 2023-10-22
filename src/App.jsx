import { useState, useEffect } from "react";
import Header from "./components/Header";
import DisplayCard from "./components/DisplayCards";
import ScoreBoard from "./components/ScoreBoard";
import "./App.css"


function App() { 
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const[clickedImages,setClickedImages]=useState([]);
  const[score,setScore]=useState(0);
  const[bestScore,setBestScore]=useState(0)
 

  useEffect(() => {
    // This effect runs whenever the score changes
    // Calculate the best score
    const newBestScore = Math.max(bestScore, score);
    setBestScore(newBestScore);
  }, [score, bestScore]);


  function getClickedImages(e) {
    const currentUrl = e.target.src;
    if (clickedImages.includes(currentUrl)) {
      setClickedImages([]);
      setScore(0);

      // Update the best score when a game ends (if the current score is higher)
      if (score > bestScore) {
        setBestScore(score);
      }
    } else {
      setClickedImages((prevState) => [...prevState, currentUrl]);
      setScore((prevState) => prevState + 1);
    }
  }

  function handleClick(e){
  const newPokemondetails=[...pokemonDetails];
  for(let i=newPokemondetails.length -1; i>0; i-- ) {
    const j =Math.floor(Math.random() * (i+1));
    [newPokemondetails[i],newPokemondetails[j]]=[newPokemondetails[j],newPokemondetails[i]]
  }
  setPokemonDetails(newPokemondetails)
  getClickedImages(e)
  

  }

  useEffect(()=>{
    const API_URL = 'https://pokeapi.co/api/v2/berry/?limit=10';

// Fetch the data for the first 10 Pokémon
fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const pokemons = data.results;

    // Extract names and image URLs from the data
    const pokemonDetails = pokemons.map(pokemon => {
     
      return {
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.indexOf(pokemon) + 1}.png`, // Generating image URL based on Pokémon ID
      };
    });
    setPokemonDetails(pokemonDetails)
   
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });




  },[]

  )
  

  return (
    <div className="body">
      <Header />
      <ScoreBoard score={score} bestScore={bestScore}/>
      <DisplayCard pokemonDetails={pokemonDetails} handleClick={handleClick}/>
    </div>
  );
}

export default App;
