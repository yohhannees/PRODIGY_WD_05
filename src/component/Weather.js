import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = "a8d503e79f791912910dc535060e0137";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    if (location) {
      axios
        .get(apiUrl)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [location]);

  return (
    <div className="container mx-auto mt-8">
      <input
        type="text"
        placeholder="Enter location"
        className="border rounded p-2"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {weatherData && (
        <div className="mt-4">
          <h2 className="text-3xl">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="text-xl">{weatherData.weather[0].description}</p>
          <p className="text-4xl font-bold">{weatherData.main.temp}&deg;C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
