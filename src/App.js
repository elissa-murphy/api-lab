import "./App.css";
import { useState, useEffect } from "react";
import { MarsGallery } from "./MarsGallery";
import { NasaApiConnection } from "./DataConnection";
import Snowfall from "react-snowfall";

function App() {
  const [year, setYear] = useState(2010);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      let returnedPictures = await NasaApiConnection(year);
      setPics(returnedPictures.photos);
      // console.log(returnedPictures.photos);
    }, 1000);

    return () => clearInterval(timer);
  }, [year]);

  return (
    <div className="App">
      <div className="container">
        <h2>Christmas on Mars at...</h2>
        <input
          aria-label="date"
          type="range"
          min="2008"
          max="2021"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <div className="year">{year}</div>
      </div>
      <MarsGallery images={pics} />
      <Snowfall />
    </div>
  );
}

export default App;
