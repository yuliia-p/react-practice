import React from "react";
import logoUrl from "../assets/logo.svg"


function Footer() {
    return (
        <div className="bg">
            <div className="container footer">
                <div className="row">
                    <div className="col">
                        <img src={logoUrl} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                            <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="col">
                        <p>+1-543-123-4567</p>
                        <p>example@fylo.com</p>
                    </div>
                    <div className="col">
                    <p><a href="">About Us</a></p>
                    <p><a href="">Jobs</a></p>
                    <p><a href="">Press</a></p>
                    <p><a href="">Blog</a></p>
                    </div>
                    <div className="col">
                    <p><a href="">Contact Us</a></p>
                    <p><a href="">Terms</a></p>
                    <p><a href="">Privacy</a></p>
                    </div>
                </div>
                
                <h1>hello footer</h1>
            </div>
        </div>
      );
}
export default Footer