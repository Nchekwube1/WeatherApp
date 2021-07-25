import Header from "./Header";
import { useState, useEffect } from 'react'
import "./scss/app.css"
import Body from "./body"
import Loading from './Loading'
import env from "./dotenv"



const city = "Nigeria"
const weatherKey = env.weatherKey
const fet = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`

function App() {
  const [load, setload] = useState(true)
  const [body, setBody] = useState({})
  async function Fetch(url) {
    let response = await fetch(url)
    let data = await response.json()
    setload(false)
    setBody(data)
    console.log(data)

  }

  useEffect(() => {


    Fetch(fet)
  }, [])

  return (
    <>
      <Header />
      {load ? <Loading /> : <Body body={body} />}
    </>
  );
}

export default App;
