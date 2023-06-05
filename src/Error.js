import React from "react";
import "./Dictionary.css";

export default function Error() {
  function handleReload() {
    window.location.reload();
  }

  return (
    <div>
      <section>
        {" "}
        <h2 className="Keyword text-center">Word does not exist</h2>
      </section>
      <button
        href="#"
        className="partOfSpeech reload text-center"
        onClick={handleReload}
      >
        Reload the page
      </button>
    </div>
  );
}
