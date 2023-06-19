import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <small>Pronunciation: </small>
        <h3>{props.phonetic}</h3>
      </div>
    );
  } else {
    return null;
  }
}
