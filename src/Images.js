import React from "react";
import "./Dictionary.css";

export default function Images(props) {
  console.log(props.image);
  if (props.image) {
    return (
      <section className="images">
        <div className="row">
          {props.image.map((image, index) => {
            return (
              <div className="col-sm-4" key={index}>
                <a href={image.src.original} target="blank">
                  <img src={image.src.landscape} className="img-fluid"></img>
                </a>
              </div>
            );
          })}
          <p className="image-note">images related to "{props.keyword}"</p>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
