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
              units: "metric", 
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
    return null; 
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Weather Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg">
            City: <span className="font-semibold">{weatherData.name}</span>
          </p>
          <p className="text-lg">
            Temperature:{" "}
            <span className="font-semibold">{weatherData.main.temp}°C</span>
          </p>
          <p className="text-lg">
            Weather Condition:{" "}
            <span className="font-semibold">
              {weatherData.weather[0].description}
            </span>
          </p>
          <p className="text-lg">
            Humidity:{" "}
            <span className="font-semibold">{weatherData.main.humidity}%</span>
          </p>
          <p className="text-lg">
            Wind Speed:{" "}
            <span className="font-semibold">{weatherData.wind.speed} m/s</span>
          </p>
          <p className="text-lg">
            Pressure:{" "}
            <span className="font-semibold">
              {weatherData.main.pressure} hPa
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg">
            Visibility:{" "}
            <span className="font-semibold">
              {weatherData.visibility} meters
            </span>
          </p>
          <p className="text-lg">
            Sunrise:{" "}
            <span className="font-semibold">
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </span>
          </p>
          <p className="text-lg">
            Sunset:{" "}
            <span className="font-semibold">
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </span>
          </p>
          <p className="text-lg">
            Cloudiness:{" "}
            <span className="font-semibold">{weatherData.clouds.all}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
