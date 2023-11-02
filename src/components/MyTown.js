import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyTown.css";

function MyTown() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=44.65107&lon=-63.582687&appid=aed7c8eaa0109f19d59b37fb3bca775e`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const celsiusToFarhenheit = (celsius) => (celsius * 9) / 5 + 32;

  const temperatureCelsius = kelvinToCelsius(weatherData.main.temp);
  const temperatureFarhenheit = celsiusToFarhenheit(temperatureCelsius);

  const temperature = isCelsius ? temperatureCelsius : temperatureFarhenheit;
  const temperatureUnit = isCelsius ? "°C" : "°F";
  const toggleButtonLabel = isCelsius ? "Change to °F" : "Change to °C";

  let weatherImage = "sunny.png";

  if (temperatureCelsius <= 10) {
    weatherImage = "cold.png";
  } else if (temperatureCelsius > 10 && temperatureCelsius <= 20) {
    weatherImage = "mild.png";
  } else if (temperatureCelsius > 20) {
    weatherImage = "sunny.png";
  }

  return (
    <div className="my-town-container">
      <h1>I live in Halifax, NS</h1>
      <img src="halifax-image.jpg" alt="Your Town" />
      <p>
        Current Weather: {temperature.toFixed(2)}
        {temperatureUnit}
      </p>
      <img src={weatherImage} alt="Weather" className="weather-image" />
      <button onClick={() => setIsCelsius(!isCelsius)}>
        {toggleButtonLabel}
      </button>
    </div>
  );
}

export default MyTown;
