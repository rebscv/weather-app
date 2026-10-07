import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./src/styles/base.css";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect (() => {

    if (!city) return;

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
      .then(response => response.json())
      .then(data => {

        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`)
          .then(response => response.json())
          .then(weatherData => {

            setWeather(weatherData);

          });


      });

  }, [city]);

  function getWeatherCondition(code) {

      if (code === 0) return "Clear sky";
      if (code === 1) return "Mainly clear";
      if (code === 2) return "Partly cloudy";
      if (code === 3) return "Overcast";
      if (code >= 51 && code <= 57) return "Drizzle";
      if (code >= 61 && code <= 67) return "Rain";
      if (code >= 71 && code <= 77) return "Snow";
      if (code >= 80 && code <= 82) return "Rain showers";
      if (code >= 85 && code <= 86) return "Snow showers";
      if (code >= 95) return "Thunderstorm";

      return "Unknown";
  }

  return (
    <main>

          
      <div className="sml-wrapper">
        <h1>Weather App</h1>
      </div>

      <SearchBar setCity={setCity} />

      {weather && (
        <WeatherCard 
          city={city} 
          temperature={weather.current.temperature_2m}
          condition={getWeatherCondition(weather.current.weather_code)}
          humidity={weather.current.relative_humidity_2m}
          wind={weather.current.wind_speed_10m}
        />
      )}

      <div className="sml-wrapper">
        <p>Selected city: {city}</p>
      </div>



    </main>
  )
}

export default App
