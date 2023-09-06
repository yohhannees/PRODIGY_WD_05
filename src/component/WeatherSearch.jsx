/* eslint-disable react/prop-types */
import { useState } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WeatherSearch;
