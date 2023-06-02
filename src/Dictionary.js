import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    console.log(keyword);
    let apiKey = `f9do3fd4558cd9a56ebf7d2bbtab042b`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container border-1 border border-secondary rounded ">
        <form onSubmit={search}>
          <input
            className="mt-5 mb-3"
            type="search"
            onChange={handleKeywordChange}
          ></input>
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
