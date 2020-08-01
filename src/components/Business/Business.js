import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <a target="_blank" rel="noopener noreferrer" href={business.url}>
            <img src={business.imageSrc} alt=" "></img>
          </a>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    );
  }
}

export default Business;