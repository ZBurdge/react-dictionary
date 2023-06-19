import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "354625fc8tco3a0bc76af830b102d699";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word would you like to search?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter word here"
            onChange={handleKeywordChange}
          ></input>
        </form>
        <div className="hint">
          suggested words: sunset, books, wine, yoga, ect....
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
