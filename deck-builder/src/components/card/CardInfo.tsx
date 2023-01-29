import React from "react";
import profileImage from "./../../assets/face.jpg";

export default function CardInfo(): JSX.Element {
  return (
    <>
      <div className="card-header">
        <img src={profileImage} className="card-header--image"></img>
        <h2 className="card-header--name">Mattia Van der Meer</h2>
        <h5 className="card-header--occupation">Web Developer</h5>
        <h6 className="card-header--website"> github.com</h6>
        <div className="card-header--button_container">
          <button className="card-header--email_button">
            <div>
              <span
                className="material-icons"
                style={{ width: "24px", fontSize: "20px" }}
              >
                email
              </span>
              <div>Email</div>
            </div>
          </button>
          <button className="card-header--linkedin_button">
            <div>
              <span
                className="material-icons"
                style={{ width: "24px", fontSize: "20px" }}
              >
                linkedin
              </span>
              <div>LinkedIn</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
