import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Countrycode from './Countrycode.json';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [progress, setProgress] = useState(0); 

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    console.log("file", e.target.files);

    if (file) {
      setImageUpload(file);

      let uploaded = 0;
      setProgress(0); 
      const interval = setInterval(() => {
        uploaded += 10;
        setProgress(uploaded);

        if (uploaded >= 100) {
          clearInterval(interval);
          console.log("File uploaded successfully!");
        }
      }, 200);
    }
  };

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    console.log("contryname", countryName);

    const country = Countrycode.countries.find((item) => item.name === countryName);
    console.log("country", country);
    setSelectedCode(country ? country.code : '');
  };

  console.log("code", selectedCode);

  return (
    <div>
       <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="/index">Start Bootstrap</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        

      <label htmlFor="country">Select Country:</label>
      <select value={selectedCountry} onChange={handleCountryChange} style={{ marginLeft: '10px' }}>
        <option>--Select Country--</option>
        {Countrycode?.countries?.map((item) => (
          <option key={item.code}>
            {item?.name}
          </option>
        ))}
      </select>

      <br /><br />

      <label>Country Code:</label>
      <input type="text" value={selectedCode} readOnly style={{ marginLeft: '10px' }} />

      <br /><br />

      <label>Upload Image:</label>
      <input type="file" accept=".csv,.xml" onChange={handleChangeFile} style={{ marginLeft: '10px' }} />

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="progress mt-3" style={{ width: '300px' }}>
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
          >
            {progress}%
          </div>
        </div>
      )}

      {imageUpload && progress === 100 && (
        <div style={{ marginTop: '20px' }}>
          <h4>Preview:</h4>
          <img src={URL.createObjectURL(imageUpload)} alt="Uploaded file"  style={{ width: '200px', border: '1px solid #ccc' }} />
        </div>
      )}

      <ReCAPTCHA
        sitekey="6LdQp7EqAAAAAJ-9NsykSu9qba4fRkfVttpTYLrD"
        // onChange={onChange}
      />
    </div>
  );
};

export default Home;
