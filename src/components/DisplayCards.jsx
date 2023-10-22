import PropTypes from "prop-types"

export default function DisplayCard({pokemonDetails,handleClick}) {
  console.log(pokemonDetails)
  return (
    <div className="image-container">
      {pokemonDetails.map((pokemonDetail, index) => (
        <div key={index} className="image-cards" id={pokemonDetail.name}>
          <img src={pokemonDetail.imageUrl} alt={pokemonDetail.name} onClick={handleClick} />
          <h3>{pokemonDetail.name}</h3>
         </div>
      ))}
    </div>
  );
}



DisplayCard.propTypes={
  pokemonDetails:PropTypes.array,
  handleClick:PropTypes.func
}
