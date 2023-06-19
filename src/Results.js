import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="searched">
          <h3>{props.results.word}</h3>
          <div>
            <Phonetic phonetic={props.results.phonetic} />
          </div>
        </section>

        {props.results.meanings.map(function (meanings, index) {
          return (
            <section key={index}>
              <div>
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
