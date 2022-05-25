import React, { useState, useEffect } from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ChooseYourSign from "./components/ChooseYourSign/ChooseYourSign";
import DisplayYourChoice from "./components/DisplayYourChoice/DisplayYourChoice";
import ChooseADay from "./components/ChooseADay/ChooseADay";

const App = () => {

  let [fetchedData, updateFetchedData] = useState([])
  let [sign, setSign] = useState('')
  let [day, setDay] = useState('')

  let api = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api, {
        method: 'POST'
      }).then(response => response.json())
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <div className="App">
      <header>
        <h1>✨🔮 Horoscope 🔮✨</h1>
      </header>
      <main>
        <DisplayYourChoice result={fetchedData} sign={sign} />
        <div>
          <ChooseADay setDay={setDay} />
          <ChooseYourSign setSign={setSign} />
        </div>
      </main>
    </div>
  );
}

export default App;
