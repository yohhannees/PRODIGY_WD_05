/* eslint-disable react/prop-types */

const WeatherDetails = ({ data }) => {
  return (
    <div className="mt-4">
      <p>
        Feels like {data.feelsLike}°C. {data.description}. {data.windSpeed}m/s{" "}
        {data.windDirection}
      </p>
      <p>{data.pressure}hPa</p>
      <p>Humidity: {data.humidity}%</p>
      <p>UV: {data.uvIndex}</p>
      <p>Dew point: {data.dewPoint}°C</p>
      <p>Visibility: {data.visibility}km</p>
      <p>No precipitation within an hour</p>
      {/* Add more weather details here */}
    </div>
  );
};

export default WeatherDetails;
