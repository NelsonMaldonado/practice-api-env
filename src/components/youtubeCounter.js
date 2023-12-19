import React from "react"

import { useState } from "react"

const youtubekey = "AIzaSyAFOnW68MXTHQ-iR0vikLhb9Q6oVdIOnvw"
const youtubeUser = "UClTIFAW9Nj-bjRdxCuvYkuQ"

const YoutubeCounter = () => {
  const [subscriberCount, setsubscriberCount] = useState(0)
  const [totalViews, settotalViews] = useState(0)
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubekey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const subscriberCount = data.items[0].statistics.subscriberCount
        const views = data.items[0].statistics.viewCount
        const parse = parseInt(views)
        const formattedViews = parse.toLocaleString(Intl.NumberFormatOptions)
        console.log(formattedViews)
        setsubscriberCount(subscriberCount)
        settotalViews(formattedViews)
      })

      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Youtube Counter</h1>
      {/* <p>{data}</p> */}
      <h5>Press the button to display Subscribers and total views</h5>
      <button onClick={fetchData}>Fetch API</button>
      <div>
        <h3>Subscribers</h3>
        <h3 style={{ color: "#83f28f" }}>{subscriberCount}</h3>
        <h2>Total Views</h2>
        <h3 style={{ color: "#83f28f" }}>
          {totalViews}
          <code style={{ color: "#83f28f" }}>!</code>
        </h3>
      </div>
    </div>
  )
}

export default YoutubeCounter
