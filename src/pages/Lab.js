import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function Lab(props) {
  const location = useLocation();
  return <div>Lab {location.state}</div>;
}

Lab.propTypes = {};

export default Lab;
