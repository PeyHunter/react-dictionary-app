import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <Phonetics phonetics={props.results.phonetic} /> <br />
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <br />
      </div>
    );
  } else {
    return null;
  }
}
