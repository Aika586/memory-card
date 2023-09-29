import PropTypes from "prop-types"
export default function ScoreBoard({score,bestScore}){

  return(
    <>
    <p>Score: {score}</p>
    <p>Best Score:{bestScore}</p>
    </>
  )
}

ScoreBoard.propTypes={
  score:PropTypes.number,
  bestScore:PropTypes.number
  // bestScore:PropTypes.func
}