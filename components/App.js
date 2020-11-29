import React from "react";
import Navigation from "../components/Navigation";

const App = ({ listing }) => {
  console.log("x", listing);
  const { total, took, vehicles, currentPage, pages, filters } = listing.data;

  let filterHTML = ``;
  for (const property in filters) {
    filterHTML += `<strong>${property}</strong>`;
    let childFilterHTML = `<ul>`;
    for (const childProperty in filters[property]) {
      childFilterHTML += `<li><strong>${childProperty}</strong>`;
      childFilterHTML += `<span>${filters[property][childProperty]}</span></li>`;
    }
    childFilterHTML += `</ul>`;
    filterHTML += `${childFilterHTML}`;
  }

  let vehicleHTML = null;
  vehicleHTML = (
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
                <span>
                  ${i.pricingData.regular}
                </span>
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
  );

  return (
    <>
      <h1>Honda Canada</h1>
      <Navigation pages={pages} />
      <ul>
        <li>
          <strong>Total vehicles in Canada</strong>
          <span>{total}</span>
        </li>
        <li>
          <strong>Total vehicles purchased today</strong>
          <span>{took}</span>
        </li>
        <li>
          <strong>Total vehicles listed on this page</strong>
          <span>{vehicles.length}</span>
        </li>
        <li>
          <strong>Current page</strong>
          <span>{currentPage}</span>
        </li>
        <li>
          <strong>Total pages</strong>
          <span>{pages}</span>
        </li>
        <li className="row">
          <strong>vehicles</strong>
          {vehicleHTML}
        </li>
        <li
          className="row"
          dangerouslySetInnerHTML={{ __html: filterHTML }}
        ></li>
      </ul>
    </>
  );
};

export default App;
