import { useState, useEffect } from "react";
import Header from "./components/Header";
import DisplayCard from "./components/DisplayCards";
// import ScoreBoard from "./components/ScoreBoard";


function App() { 
  const [pokemonDetails, setPokemonDetails] = useState([]);

function getclikedImages(e){
  const clikedImages=[];

  clikedImages.push(e.target.src)
  console.log(clikedImages)
  const currentUrl=e.target.src
  console.log(currentUrl)
 const isSamecard= clikedImages.some(image=>{
    image===currentUrl
  })
  if(isSamecard){
    console.log("samecard")
  }else{
    console.log("not same")
  }

}

  function handleclcik(e){
    console.log(e.target)
  const newPokemondetails=[...pokemonDetails];
  for(let i=newPokemondetails.length -1; i>0; i-- ) {
    const j =Math.floor(Math.random() * (i+1));
    [newPokemondetails[i],newPokemondetails[j]]=[newPokemondetails[j],newPokemondetails[i]]
  }
  setPokemonDetails(newPokemondetails)
  getclikedImages(e)
  

  }




  console.log(pokemonDetails)
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
    setPokemonDetails(pokemonDetails
    )
   
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });




  },[]

  )
  

  return (
    <>
      <Header />
      <DisplayCard pokemonDetails={pokemonDetails} handleclcik={handleclcik}/>
    </>
  );
}

export default App;
