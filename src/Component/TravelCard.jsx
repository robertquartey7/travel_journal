import React from "react";
import map from "../assets/map.svg";

function TravelCard({ location, mapLink, title, date, description }) {
  return (
    <>
      <div className="card">
        <div className="left__card">
          {/* image field */}
          <img
            src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
            alt=""
          />
        </div>
        <div className="right__card">
          {/* travel */}
          <div className="right__topcard">
            <p>
              <img src={map} alt="" /> {location}
            </p>
            <a href={mapLink}>View on Google Maps</a>
          </div>
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default TravelCard;
