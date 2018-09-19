import React, { Component } from "react";
import { AVAILABLE_COUNTRIES, COUNTRY_SPEC } from "../contents/data";

const countrySwitcher = props => {
  let { country } = props;
  return (
    <div className="country-switcher">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {country ? "Switch" : "Select"} Country
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="scroll">
            {AVAILABLE_COUNTRIES &&
              AVAILABLE_COUNTRIES.map( (c, index) => (
                <a
                  key={c}
                  className="dropdown-item"
                  onClick={() => props.switchCountry(c)}
                >
                  {COUNTRY_SPEC[index].name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default countrySwitcher;
