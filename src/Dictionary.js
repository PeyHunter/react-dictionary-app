import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import Images from "./Images.js";
import Error from "./Error.js";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  function dictionaryHandleResponse(response) {
    if (response.data.status === "not_found") {
      setError(response.data.message);
    } else {
      setResults(response.data);
    }
  }

  function imageHandleResponse(response) {
    setImage(response.data.photos);
  }

  function search() {
    let apiKey = `f9do3fd4558cd9a56ebf7d2bbtab042b`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(url)
      .then(dictionaryHandleResponse)
      .catch((error) => setError(error));

    let imageApiKey = "f9do3fd4558cd9a56ebf7d2bbtab042b";
    let imageUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}&per_page=3`;
    axios.get(imageUrl).then(imageHandleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (error) {
    return <Error />;
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <div className="container">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                className="searchEngine"
                type="search"
                placeholder="search for a word..."
                onChange={handleKeywordChange}
              ></input>
            </form>
          </section>
          <Results results={results} />
          <Images image={image} keyword={keyword} />
        </div>
      </div>
    );
  } else {
    load();
    search();
  }
}
