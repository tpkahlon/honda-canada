import React from "react";
import Link from "next/link";

const HondaCanada = ({ listing }) => {
  console.log(listing);
  const { total, took, vehicles, currentPage, pages, filters } = listing.data;

  let filterHTML = ``;
  for (const property in filters) {
    filterHTML += `<strong>${property}: </strong>`;
    let childFilterHTML = `<ul>`;
    for (const childProperty in filters[property]) {
      childFilterHTML += `<li><strong>${childProperty}: </strong>`;
      childFilterHTML += `<span>${filters[property][childProperty]}</span></li>`;
    }
    childFilterHTML += `</ul>`;
    filterHTML += `${childFilterHTML}`;
  }

  let vehicleHTML = null;
  vehicleHTML = (
    <ul>
      {vehicles.map((i) => {
        return (
          <li key={i.id}>
            <ul style={{ borderTop: "1px solid black" }}>
              <li>
                <strong>ID</strong>: <span>{i.id}</span>
              </li>
              <li>
                <strong>VIN</strong>: <span>{i.vin}</span>
              </li>
              <li>
                <strong>Price</strong>:{" "}
                <span style={{ fontSize: "2rem" }}>
                  ${i.pricingData.regular}
                </span>
              </li>
              <li>
                <strong>Model</strong>: <span>{i.model}</span>
              </li>
              <li>
                <strong>Mileage</strong>: <span>{i.odometer}</span>
              </li>
              <li>
                <strong>Year</strong>: <span>{i.year}</span>
              </li>
              <li>
                <strong>Type</strong>: <span>{i.driveType}</span>
              </li>
              <li>
                <strong>Color</strong>: <span>{i.color_exterior}</span>
              </li>
              <li>
                <strong>Color (Interior)</strong>:{" "}
                <span>
                  {i.color.interior
                    ? i.color.interior.generic
                    : "Not mentioned"}
                </span>
              </li>
              <li>
                <a
                  href={i.dealer.websiteUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>View Dealer Site</strong>
                </a>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );

  let navigation = [...new Array(pages)].map((i, index) => (
    <Link href="/honda/[id]" as={`/honda/${++index}`} key={index}>
      <a>Page {index++}</a>
    </Link>
  ));
  return (
    <>
      <h1>Honda Canada</h1>
      {navigation}
      <ul>
        <li>
          <strong>Total vehicles in Canada: </strong>
          <span>{total}</span>
        </li>
        <li>
          <strong>Total vehicles purchased today in Canada: </strong>
          <span>{took}</span>
        </li>
        <li>
          <strong>Total vehiles came in strongis API call: </strong>
          <span>{vehicles.lengstrong}</span>
        </li>
        <li>
          <strong>Current page of strongis API call: </strong>
          <span>{currentPage}</span>
        </li>
        <li>
          <strong>Total pages available in dataset: </strong>
          <span>{pages}</span>
        </li>
        <li dangerouslySetInnerHTML={{ __html: filterHTML }}></li>
        <li>
          <strong>vehicles:</strong>
          {vehicleHTML}
        </li>
      </ul>
    </>
  );
};

export default HondaCanada;
