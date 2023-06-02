import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonym">
        {props.synonyms.map(function Synonym(synonyms, index) {
          return <li key={index}> {synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
