
export default function DisplayCard({pokemonDetails,handleclcik}) {
  
  


  return (
    <div className="image-container">
      {pokemonDetails.map((pokemonDetail, index) => (
        <div key={index}>
          <img src={pokemonDetail.imageUrl} alt={pokemonDetail.name} onClick={handleclcik} />
          {pokemonDetail.name}
         </div>
      ))}
    </div>
  );
}
