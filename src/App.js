import logo from "./logos/youtube.png"
import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import YoutubeCounter from "./components/youtubeCounter"
// const Home = () => {
//   return <div>Home Page</div>
// }

// const Forms = () => {
//   return <div>Type in forms here</div>
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <YoutubeCounter />
        {/* <Link to="/forms">Forms</Link>
        <Link to="/">Home</Link>

        <Route path="/forms" component={Forms} />
        <Route exact path="/" component={Home} /> */}
      </header>
    </div>
  )
}

export default App
