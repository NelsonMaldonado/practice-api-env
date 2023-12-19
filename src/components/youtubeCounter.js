import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const YoutubeCounter = () => {
  const [data, setData] = useState([])

  //functions starts here
  //   useEffect(() => {
  //     const getData = () => {
  //       axios
  //         .get("https://pokeapi.co/api/v2/pokemon/")

  //         .then((res) => console.log(res))
  //         .catch((err) => console.log(err.message))
  //     }
  //     getData()
  //   }, [])
  //Functions start here
  //   React.useEffect(() => {
  //     //https://pokeapi.co/api/v2/pokemon/ditto
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((res) => console.log(res.results))
    .then((res) => {
      const data = res.results
      console.log(data)
    })
    .catch((err) => console.error(err))
  //   }, [])

  return (
    <div>
      <h1>Youtube Counter</h1>
      {/* <p>{data}</p> */}
      <h4>The following section is made to practice fetching APIs again</h4>
      <button>Fetch APIs</button>
    </div>
  )
}

export default YoutubeCounter
