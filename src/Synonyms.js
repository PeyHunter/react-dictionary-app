import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonym">
        {props.synonyms.map(function Synonym(synonyms, index) {
          return (
            <ul key={index}>
              {" "}
              <li> {synonyms}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
