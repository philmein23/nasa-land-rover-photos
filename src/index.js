import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useFetch } from "./use-fetch";

import "./styles.css";

const API_KEY = "5xQe9gc2kxZk9g6ByF8yd6vYAvfnuGLdHf16YYUU";
const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`;

function App() {
  let { data, error, isLoading } = useFetch(URL);

  console.log(data, error);

  if (isLoading) {
    return "loading....";
  }

  return (
    <main className="container">
      <section className="image-grid-container">
        {data &&
          data.photos.map(img => {
            return (
              <div className="image-container" key={img.id}>
                <figure>
                  <img className="rover-image" src={img.img_src} alt={img.id} />
                </figure>
              </div>
            );
          })}
      </section>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
