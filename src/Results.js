import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3 className="Keyword">{props.results.word}</h3>
          <Phonetics phonetics={props.results.phonetic} /> <br />
        </section>

        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
