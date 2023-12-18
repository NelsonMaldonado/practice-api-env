import React from "react"
import { Axios } from "axios"
import { useState } from "react"

const YoutubeCounter = () => {
  const [data, setData] = useState(null)

  //Functions start here
  const fetchAPI = () => {
    alert("Fetch API button pressed")
  }
  return (
    <div>
      <h1>Youtube Counter</h1>
      <p>{data}</p>
      <h4>The following section is made to practice fetching APIs again</h4>
      <button onClick={fetchAPI}>Fetch APIs</button>
    </div>
  )
}

export default YoutubeCounter
