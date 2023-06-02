import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phoenetics">
        <p>/{props.phonetics}/</p>
      </div>
    );
  } else {
    return null;
  }
}
