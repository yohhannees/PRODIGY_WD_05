/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({ apiKey, query }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: query,
              appid: apiKey,
              units: "metric", // You can change this to 'imperial' for Fahrenheit
            },
          }
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (query) {
      fetchWeatherData();
    }
  }, [apiKey, query]);

  if (!weatherData) {
    return null; // Return null if data is not available yet
  }

  return (
    <div>
      <h2>Weather Information</h2>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather Condition: {weatherData.weather[0].description}</p>
      {/* Add more weather data as needed */}
    </div>
  );
};

export default WeatherInfo;
