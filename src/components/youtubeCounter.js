import React from "react"
import { useState } from "react"

const YoutubeCounter = () => {
  const [counter, setCounter] = useState("Todays count!")

  //Functions start here
  const fetchAPI = () => {
    console.log("Button clicked")
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => console.log(data.results))
      .catch((error) => console.error(error))
  }

  return (
    <div>
      <h1>Youtube Counter</h1>
      <p>{counter}</p>
      <h4>The following section is made to practice fetching APIs again</h4>
      <button onClick={fetchAPI}>Fetch APIs</button>
    </div>
  )
}

export default YoutubeCounter
