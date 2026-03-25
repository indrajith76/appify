import React from "react";
import { Link } from "react-router";

const LinkBtn = ({ text, url }) => {
  return (
    <Link to={url} className="btn bg-linear-to-br from-purple-900 to-purple-500 text-white px-10">
      {text}
    </Link>
  );
};

export default LinkBtn;
