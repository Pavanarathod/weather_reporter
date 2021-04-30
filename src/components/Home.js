import React from "react";
import "./Home.css";
import Nav from "./Nav";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__headerBody">
        <h1>Weather Reporter.?</h1>
      </div>
      <Nav />
      <Search />
    </div>
  );
}

export default Home;
