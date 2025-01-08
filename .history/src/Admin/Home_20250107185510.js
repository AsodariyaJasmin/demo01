import React, { useState } from "react";
import countryCodes from "./Countrycode.json";

const Home = () => {
  const [selectedCode, setSelectedCode] = useState("");

  const handleChange = (event) => {
    setSelectedCode(event.target.value);
  };

  return (
    <div>
      <label htmlFor="countryCode">Select Country Code: </label>
      <select
        id="countryCode"
        value={selectedCode}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "4px", fontSize: "16px" }}
      >
        <option value="" disabled>
          -- Select a Country --
        </option>
        {countryCodes.countries.map((country) => (
          <option key={country.iso} value={country.code}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      {selectedCode && (
        <div style={{ marginTop: "10px" }}>
          <strong>Selected Code:</strong> {selectedCode}
        </div>
      )}
    </div>
  );
};

export default Home;
