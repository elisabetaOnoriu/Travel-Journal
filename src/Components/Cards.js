import React from "react";
import location from "../images/location.png";

export default function Cards(props) {
    return (
        <div className = "card">
            <img className = "big-image" src = {props.imageUrl} />
            <div className = "country-and-maps">
                <div className = "icon-country-link">
            <img className = "little-location-icon" src = {location} />
                 <span className = "country">{props.location.toUpperCase()}</span>
                <a className = "google-maps-url" href = {props.googleMapsUrl}>View on Google Maps </a>
            </div>
            <h2><b>{props.title}</b></h2>
            <p className = "date">{props.startDate} - {props.endDate}</p>
            <p className = "description">{props.description}</p>
            
        </div>
        </div>
    )
}
