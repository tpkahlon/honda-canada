import React from "react";

const Filters = ({ filters, handleClick }) => {
  let childFilterList = [];

  for (const property in filters) {
    let childList = [];
    for (const childProperty in filters[property]) {
      childList.push({
        child: childProperty,
        value: filters[property][childProperty],
      });
    }
    childFilterList.push({
      property,
      items: childList,
    });
  }

  return childFilterList.map(({ property, items }, index) => {
    return (
      <li className="row" key={index} onClick={handleClick}>
        <strong>{property}</strong>
        <ul>
          {items.map(({ child, value }, idx) => {
            return (
              <li key={idx}>
                <strong>{child}</strong>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });
};

export default Filters;
