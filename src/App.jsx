import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {

  const [city, setCity] = useState("");

  return (
    <main>

      <h1>Weather App</h1>
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} temperature="18" condition="Partly Cloudy" humidity="65" wind="12" />

      <p>Selected city: {city}</p>

    </main>
  )
}

export default App
