import { useState } from 'react'

// un lugar adecuado para definir un componente
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  return (
    <>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      {all > 0 && (
        <>
          <p>Average {Math.abs((good + bad * -1) / all)}</p>
          <p>Positive {(good / all) * 100} %</p>
        </>
      )}
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>Give feedback</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
