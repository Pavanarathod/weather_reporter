import React, { useState, useEffect } from "react";

const useApi = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${API_KEY}`
      )
        .then((response) => response.jason())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return {
    data,
  };
};

export default useApi;
useEffect(() => {
  const fetchData = async () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=02decb769eee3855fb29c77d6e59dbd6`
    )
      .then((response) => response)
      .then((result) => {
        setInput(result);
        console.log(result);
      });
  };
  fetchData();
}, []);
