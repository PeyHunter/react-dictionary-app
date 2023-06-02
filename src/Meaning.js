import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <section>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p> Definition: {props.meaning.definition} </p>

      <em>
        {" "}
        <p> Example: {props.meaning.example} </p>
      </em>

      <strong>
        {" "}
        <p>
          {" "}
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </strong>
    </section>
  );
}
