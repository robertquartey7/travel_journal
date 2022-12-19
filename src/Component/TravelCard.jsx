import React from "react";
import map from '../assets/map.svg'

function TravelCard({}) {
  return (
    <>
      <div className="card">
        <div className="left__card">
          {/* image field */}
          <img src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="" />
         
        </div>
        <div className="right__card">
          {/* travel */}
          <div className="right__topcard">
            <p><img src={map} alt="" /> location</p>
            <a href="">View on Google Maps</a>
          </div>
          <h1>title</h1>
          <p>12 Jan, 2021-24 Jan, 2021</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            eos unde repellat vel fugit dolore!
          </p>
        </div>
      </div>
    </>
  );
}

export default TravelCard;
