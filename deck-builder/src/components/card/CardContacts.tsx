import React from "react";
import fbLogo from "./../../assets/fb-logo.png";
import igLogo from "./../../assets/ig-logo.png";
import twLogo from "./../../assets/twitter-logo.png";
import ytLogo from "./../../assets/yt-logo.png";

const facebookLink = "https://www.facebook.com";
const instagramLink = "https://www.instagram.com";
const ytLink = "https://www.youtube.com";
const twitterLink = "https://www.twitter.com";

export default function CardContacts(): JSX.Element {
  return (
    <>
      <div className="contacts">
        <div></div>
        <div style={{ marginLeft: "40px" }}></div>
        <div>
          <a href={facebookLink}>
            <img
              className="contacts--image"
              src={fbLogo}
              alt={facebookLink}
            ></img>
          </a>
        </div>
        <div>
          <a href={instagramLink}>
            <img
              className="contacts--image"
              src={igLogo}
              alt={instagramLink}
            ></img>
          </a>
        </div>
        <div>
          <a href={ytLink}>
            <img className="contacts--image" src={ytLogo} alt={ytLink}></img>
          </a>
        </div>
        <div>
          <a href={twitterLink}>
            <img
              className="contacts--image"
              src={twLogo}
              alt={twitterLink}
            ></img>
          </a>
        </div>
        <div style={{ marginLeft: "70px" }}></div>
      </div>
    </>
  );
}
