import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `f9do3fd4558cd9a56ebf7d2bbtab042b`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="container">
        <section>
          <form onSubmit={search}>
            <input
              className="  searchEngine"
              type="search"
              onChange={handleKeywordChange}
            ></input>
          </form>
        </section>

        <Results results={results} />
      </div>
    </div>
  );
}
