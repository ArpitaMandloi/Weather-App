import Card from "react-bootstrap/Card";
import "./WeatherComponent.css";
import axios from "axios";
import { useState } from "react";

function WeatherComponent() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=cac5e491f1a74bc897d43909260710&q=${city}`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="weather-page">

      <Card className="weather-card">
        <Card.Body className="weather-body">

          {/* Heading */}

          <h1 className="weather-title">
            Weather App
          </h1>

          <p className="weather-subtitle">
            Get real-time weather information
          </p>

          {/* Search */}

          <div className="search-container">

            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="search-bar"
            />

            <button
              className="search-button"
              onClick={getWeather}
            >
              Search
            </button>

          </div>

          {/* Weather */}

          {weather && (
            <div className="weather-result">

              {/* Main Weather */}

              <div className="main-weather">

                <div className="weather-icon">
                  <img
                    src={`https:${weather.current.condition.icon}`}
                    alt={weather.current.condition.text}
                  />
                </div>

                <div className="weather-main-info">

                  <h2>
                    {weather.location.name}
                  </h2>

                  <p className="condition">
                    {weather.current.condition.text}
                  </p>

                  <div className="temperature">
                    {Math.round(weather.current.temp_c)}
                    <span>°C</span>
                  </div>

                </div>

              </div>

              {/* Weather Details */}

              <div className="weather-details">

                <div className="detail-item">
                  <span className="detail-icon">💧</span>

                  <div>
                    <p>Humidity</p>
                    <strong>
                      {weather.current.humidity}%
                    </strong>
                  </div>
                </div>


                <div className="detail-item">
                  <span className="detail-icon">💨</span>

                  <div>
                    <p>Wind Speed</p>
                    <strong>
                      {weather.current.wind_kph} km/h
                    </strong>
                  </div>
                </div>


                <div className="detail-item">
                  <span className="detail-icon">🌡️</span>

                  <div>
                    <p>Feels Like</p>
                    <strong>
                      {Math.round(weather.current.feelslike_c)}°C
                    </strong>
                  </div>
                </div>

              </div>

              {/* Extra Information */}

              <div className="extra-details">

                <div>
                  <span>Pressure</span>
                  <strong>
                    {weather.current.pressure_mb} mb
                  </strong>
                </div>

                <div>
                  <span>Wind Direction</span>
                  <strong>
                    {weather.current.wind_dir}
                  </strong>
                </div>

                <div>
                  <span>UV Index</span>
                  <strong>
                    {weather.current.uv}
                  </strong>
                </div>

              </div>

            </div>
          )}

        </Card.Body>
      </Card>

    </div>
  );
}

export default WeatherComponent;