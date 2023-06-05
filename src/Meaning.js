import React from "react";
import Synonyms from "./Synonyms.js";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <section>
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em className="example">{props.meaning.example}</em>

      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}
