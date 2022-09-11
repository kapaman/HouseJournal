import React, { useContext } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";
import Back from "../images/back.png";

const Navi = ({ addNew }) => {
  const { showView, setShowView, showProperty, setShowProperty } =
    useContext(DataContext);
  let show, setShow;
  if (addNew === "add Property") {
    show = showProperty;
    setShow = setShowProperty;
  } else if (addNew === "add view") {
    show = showView;
    setShow = setShowView;
  }

  console.log(show, setShow);
  return (
    <nav>
      <div className="logo">
        <Link
          to="/properties"
          style={{ textDecoration: "none", color: "white" }}
        >
          HouseJournal
        </Link>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fa fa-bars" />
      </label>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        {show !== undefined && addNew !== "about" ? (
          <li>
            <a className="onclicker" onClick={() => setShow(!show)}>
              {addNew}
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navi;
