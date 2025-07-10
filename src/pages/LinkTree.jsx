import React from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import "../linktree.css"

const LinkTree = () => {
  return (
    <div className="container-lg d-flex flex-column align-items-center justify-content-center min-vh-100 text-center p-4">

      <div className="w-100 link_tree p-3" style={{ maxWidth: '400px' }}>
        <img src={logo}
          className="rounded-circle mb-3"
          alt="Profile"
          style={{ width: '120px'}}
        />
        <h2 className="mb-1">747 Flight</h2>
        <p className="text-muted mb-4">Lounge Bar & Liquor Store</p>
        <Link to="" className="btn w-100 mb-3" target="_blank" rel="noreferrer">
          Visit our Website
        </Link>
        <Link to="" className="btn w-100 mb-3" target="_blank" rel="noreferrer">
          Location , Hours , Menus
        </Link>
        <Link to="" className="btn w-100 mb-3" target="_blank" rel="noreferrer">
          Order Now
        </Link>
        <Link to="" className="btn w-100 mb-3">
          FAQ
        </Link>
        <Link to="" className="btn w-100 mb-3">
          Be Our Friend
        </Link>
      </div>
    </div>
  );
};

export default LinkTree;
