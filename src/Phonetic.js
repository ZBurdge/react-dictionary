import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <small>Pronunciation: </small>
        <h5>{props.phonetic}</h5>
      </div>
    );
  } else {
    return null;
  }
}
