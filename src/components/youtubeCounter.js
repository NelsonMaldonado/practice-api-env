import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const youtubekey = ""
const youtubeUser = ""

const YoutubeCounter = () => {
  const [viewCount, setViewCount] = useState(0)
  const [channelName, setChannelName] = useState("Youtube Channel")
  const fetchData = () => {
    fetch()
      .then((res) => res.json())

      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Youtube Counter</h1>
      {/* <p>{data}</p> */}
      <h5>Press the button to display Subscribers</h5>
      <button onClick={fetchData}>Subscribers Counter</button>
      <div>
        <h3>{channelName}</h3>
      </div>
    </div>
  )
}

export default YoutubeCounter
