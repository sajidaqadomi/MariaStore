import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Typography variant="h1">404 - Not Found!</Typography>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
