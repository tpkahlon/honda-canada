import React from "react";
import Navigation from "../components/Navigation";
import Filters from "../components/Filters";
import Vehicles from "../components/Vehicles";

const App = ({ listing }) => {
  const { total, took, vehicles, currentPage, pages, filters } = listing.data;

  const handleClick = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <>
      <h1>Honda Canada&nbsp;&nbsp;🇨🇦</h1>
      <Navigation pages={pages} currentPage={currentPage} />
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
        <Filters filters={filters} handleClick={handleClick} />
        <Vehicles vehicles={vehicles} handleClick={handleClick} />
      </ul>
    </>
  );
};

export default App;
