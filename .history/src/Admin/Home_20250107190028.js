import React, { useState } from "react";
import countryCodes from "./Countrycode.json";

const CountryCodeSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  const handleCountryChange = (event) => {
    const countryIso = event.target.value;
    setSelectedCountry(countryIso);

    // Find the corresponding country code
    const selectedCountryData = countryCodes.countries.find(
      (country) => country.iso === countryIso
    );

    setSelectedCode(selectedCountryData ? selectedCountryData.code : "");
  };

  return (
    <div>
      <h2>Country and Code Selector</h2>
      
      {/* Country Dropdown */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="country" style={{ marginRight: "10px" }}>
          Select Country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          style={{ padding: "8px", borderRadius: "4px", fontSize: "16px" }}
        >
          <option value="" disabled>
            -- Select a Country --
          </option>
          {countryCodes.countries.map((country) => (
            <option key={country.iso} value={country.iso}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* Country Code Dropdown */}
      <div>
        <label htmlFor="countryCode" style={{ marginRight: "10px" }}>
          Country Code:
        </label>
        <select
          id="countryCode"
          value={selectedCode}
          disabled
          style={{
            padding: "8px",
            borderRadius: "4px",
            fontSize: "16px",
            backgroundColor: "#f3f3f3",
          }}
        >
          <option value="">{selectedCode || "-- Select a Country First --"}</option>
        </select>
      </div>
    </div>
  );
};

export default CountryCodeSelector;
