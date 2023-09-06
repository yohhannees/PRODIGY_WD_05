import { useState } from "react";
import UnsplashImage from "./component/UnsplashImage";
import WeatherInfo from "./component/WeatherInfo";

function App() {
  const unsplashApiKey = "IDnu3i8yDUSiH70Fj7qtIxAkp7yEOL4XeO7IjWfRBuI";
  const openWeatherApiKey = "a8d503e79f791912910dc535060e0137"; // Replace with your OpenWeather API key

  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("");

  const handleSearch = () => {
    setCountry(searchQuery);
  };

  return (
    <div className="App">
      <h1>Unsplash Image and Weather Info</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a country or city"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <UnsplashImage apiKey={unsplashApiKey} query={searchQuery} />

      {country && <WeatherInfo apiKey={openWeatherApiKey} query={country} />}
    </div>
  );
}

export default App;
