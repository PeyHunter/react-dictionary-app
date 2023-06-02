import React from "react";

export default function Meaning(props) {
  return (
    <section>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p> {props.meaning.definition} </p>
      <em>
        {" "}
        <p> {props.meaning.example} </p>{" "}
      </em>
    </section>
  );
}
