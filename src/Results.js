import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="wordSearched">
          <h3 className="word">{props.results.word}</h3>
          <div>
            <Phonetic phonetic={props.results.phonetic} />
          </div>
        </section>

        {props.results.meanings.map(function (meanings, index) {
          return (
            <section>
              <div key={index}>
                <Meaning meaning={meanings} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
