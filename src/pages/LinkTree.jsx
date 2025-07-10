import React from "react";
// Importing icons from lucide-react for the buttons
 
import { BiBeer, BiMapPin, BiWine } from "react-icons/bi";
import { LuMartini } from "react-icons/lu";
import { HiCalendarDays } from "react-icons/hi2";
import { Facebook, MapFill, PhoneFill } from "react-bootstrap-icons";
import { RiGlobalFill } from "react-icons/ri";
import { BsGoogle, BsWhatsapp } from "react-icons/bs";
import logo from "../assets/images/logo.png"

// You would typically import your CSS file like this in a standard React project:
// import './LinkTree.css';

const LinkTree = () => {
  return (
    // Main container for the LinkTree page, designed to mimic the image's background
    // The background image is set inline because it's dynamic and might change.
    <div className="link-tree-container"
         >
      {/* Overlay to darken background slightly and make text more readable */}
      <div className="link-tree-overlay"></div>

      {/* LinkTree content wrapper */}
      <div className="link-tree-content">
        {/* Profile image */}
        <img
          src={logo} // Placeholder image for a liquor shop logo/avatar
          className="link-tree-profile-img"
          alt="Liquor Shop Profile"
        />
        {/* Title and subtitle */}
        <h2 className="link-tree-title">747 Flight</h2>
        <p className="link-tree-subtitle">
          Your curated selection of fine wines, spirits, and craft beers for every occasion.
        </p>

        {/* Navigation Links/Buttons */}
        <div className="link-tree-links-container">
          <a
            href="https://g.co/kgs/9r37dso" // Replace with actual URL for wines
            className="link-tree-button"
            target="_blank"
            rel="noreferrer"
          >
            <MapFill size={20} className="text-red-600" /> {/* Wine icon */}
            Get Directions 
          </a>
          <a
            href="https://flight747lounge.com/" // Replace with actual URL for spirits
            className="link-tree-button"
            target="_blank"
            rel="noreferrer"
          >
            <RiGlobalFill size={20} className="text-blue-600" /> {/* Martini icon */}
            Visit Our Website
          </a>
          <a
            href="#" // Replace with actual URL for beers
            className="link-tree-button"
            target="_blank"
            rel="noreferrer"
          >
            <BsGoogle size={20} className="text-yellow-600" /> {/* Beer icon */}
            eave a Google Review 
          </a>
          <a
            href="tel:+1 904-741-4331" // Replace with actual URL for cocktail recipes
            className="link-tree-button"
            
          >
            <PhoneFill size={20} className="text-green-600" /> {/* Calendar icon */}
            Call Us Now 
          </a>
          <a
            href="https://wa.me/19047414331?text=Hi!%20I%20was%20checking%20out%20Flight%20747%20Jacksonville%20and%20had%20a%20quick%20question." // Replace with actual URL for contact/location
            className="link-tree-button"
          >
            <BsWhatsapp size={20} className="text-green-600" /> {/* Map pin icon */}
            Message Us on WhatsApp 
          </a>
            <a
            href="https://www.facebook.com/profile.php?id=61576995843875" // Replace with actual URL for contact/location
            className="link-tree-button"
          >
            <Facebook size={20} className="text-purple-600" /> {/* Map pin icon */}
            Follow Us on Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
