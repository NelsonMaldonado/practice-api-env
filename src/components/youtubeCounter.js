import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const YoutubeCounter = () => {
  const [data, setData] = useState(
    "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg"
  )

  //functions starts here
  // useEffect(() => {
  //   const getData = () => {
  //     axios
  //       .get("https://dog.ceo/api/breeds/image/random/")

  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err.message))
  //   }
  //   getData()
  // }, [])
  //Functions start here
  const fetchData = () => {
    //https://pokeapi.co/api/v2/pokemon/ditto
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setData(res.message))

      .catch((err) => console.error(err))
  }

  return (
    <div>
      <h1>Youtube Counter</h1>
      {/* <p>{data}</p> */}
      <h4>Press the button to display random animals</h4>
      <button onClick={fetchData}>Fetch APIs</button>
      <div>
        <img src={data} alt="Random_dog" />
      </div>
    </div>
  )
}

export default YoutubeCounter
