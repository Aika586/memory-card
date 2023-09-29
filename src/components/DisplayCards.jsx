import PropTypes from "prop-types"

export default function DisplayCard({pokemonDetails,handleClick}) {
  return (
    <div className="image-container">
      {pokemonDetails.map((pokemonDetail, index) => (
        <div key={index}>
          <img src={pokemonDetail.imageUrl} alt={pokemonDetail.name} onClick={handleClick} />
          {pokemonDetail.name}
         </div>
      ))}
    </div>
  );
}



DisplayCard.propTypes={
  pokemonDetails:PropTypes.array,
  handleClick:PropTypes.func
}
