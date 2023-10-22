import PropTypes from "prop-types"
export default function ScoreBoard({score,bestScore}){

  return(
    <div className="score-container">
    <p>Score: {score}</p>
    <p>Best Score:{bestScore}</p>
    </div>
  )
}

ScoreBoard.propTypes={
  score:PropTypes.number,
  bestScore:PropTypes.number
  // bestScore:PropTypes.func
}