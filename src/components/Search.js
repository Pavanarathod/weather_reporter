import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { MicNoneSharp } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const api = {
  key: "02decb769eee3855fb29c77d6e59dbd6",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

function Search() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log("weather....", result);
        });
    }
  };

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          placeholder="Enter the city name ? "
          type="text"
          name=""
          id=""
        />
        <MicNoneSharp className="search__inputIcon" />
      </div>

      <div className="search__button">
        <Button type="submit" variant="outline">
          Weather Search..
        </Button>
        {/* <Button varient="outline">City</Button> */}
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="location__box">
          <div className="location">
            <h2>City: {weather.name}</h2>
            <h2>Country: {weather.sys.country}</h2>
          </div>
          <br />

          <hr />
          <div className="weather">
            <h2>Temp: {Math.round(weather.main.temp)}`c 🤒</h2>
          </div>
          <div className="weather__mood">
            <h2>
              Weather: {weather.weather[0].main}
              🔴
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
