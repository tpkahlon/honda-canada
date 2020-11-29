import React from "react";

const Vehicles = ({ vehicles, handleClick 
}) => {
  return (
    <li className="row" onClick={handleClick}>
      <strong>Vehicles</strong>
      <ul className="child">
        {vehicles.map((i) => {
          return (
            <li key={i.id}>
              <ul>
                <li>
                  <strong>ID</strong> <span>{i.id}</span>
                </li>
                <li>
                  <strong>VIN</strong> <span>{i.vin}</span>
                </li>
                <li>
                  <strong>Price</strong>
                  <span>${i.pricingData.regular}</span>
                </li>
                <li>
                  <strong>Model</strong> <span>{i.model}</span>
                </li>
                <li>
                  <strong>Mileage</strong> <span>{i.odometer}</span>
                </li>
                <li>
                  <strong>Year</strong> <span>{i.year}</span>
                </li>
                <li>
                  <strong>Type</strong> <span>{i.driveType}</span>
                </li>
                <li>
                  <strong>Color</strong> <span>{i.color_exterior}</span>
                </li>
                <li>
                  <strong>Color (Interior)</strong>{" "}
                  <span>
                    {i.color.interior
                      ? i.color.interior.generic
                      : "Not mentioned"}
                  </span>
                </li>
                <li className="child--view">
                  <a
                    href={i.dealer.websiteUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View
                  </a>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Vehicles;
