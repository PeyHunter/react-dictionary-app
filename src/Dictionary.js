import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import NoResults from "./Results.js";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = `f9do3fd4558cd9a56ebf7d2bbtab042b`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
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

  if (loaded) {
    return (
      <div className="dictionary">
        <div className="container">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                className="searchEngine"
                type="search"
                onChange={handleKeywordChange}
              ></input>
            </form>
          </section>

          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    search();
    return;
    <NoResults />;
  }
}
