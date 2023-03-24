import React from "react";
import logoUrl from "../assets/logo.svg"

function NavbarComponent() {
    return (
        <div className="container">
            <div className="row align-items-start row-navbar">
            <div className="col">
                <img src={logoUrl} alt="" />
            </div>
            <div style={{textAlign: "end"}} className="col">
                <a href="#home">Features</a>
                <a href="#link">Team</a>
                <a href="#">Sign In</a>
            </div>       
            </div>
        </div>
    
    );
  }
  
  export default NavbarComponent;
