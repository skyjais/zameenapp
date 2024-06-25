import React from "react";
import "./LocationCard.css";

const LocationCard = ({
  price,
  type,
  location,
  city,
  state,
  postal_code,
  beds,
  baths,
  furnished,
  posted_on,
  image_url,
  details_url,
}) => {
  console.log(image_url, type, "kkkkk");
  return (
    <div className="location-card">
      <img
        src={image_url}
        alt={`${type} in ${location}`}
        className="location-image"
      />
      <div className="location-details">
        <h2 className="price">{price}</h2>
        <h3 className="type">{type}</h3>
        <p className="location">{`${location}, ${city}, ${state} - ${postal_code}`}</p>
        <div className="icons">
          <span className="beds">{beds} Beds</span>
          <span className="baths">{baths} Baths</span>
          <span className="furnished">
            {furnished ? "Furnished" : "Unfurnished"}
          </span>
        </div>
        <p className="posted-on">Posted On {posted_on}</p>
        <a href={details_url} className="view-details">
          View Details
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
