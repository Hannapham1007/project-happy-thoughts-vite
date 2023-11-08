import React from "react";
import "./Header.css";

// Author Karolina
function Header() {
  return (
    <div className="header">
      <h1>Project Happy Thoughts</h1>
      <div className="header-heart-icon">
      <i className="fas fa-heart" style={{fontSize:'24px'}}></i>
      </div>
     
    </div>
  );
}

export default Header;
