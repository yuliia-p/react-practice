import React from "react";
import imgUrl from "../assets/illustration-intro.png"
import accessImgUrl from "../assets/icon-access-anywhere.svg"
import securityImgUrl from "../assets/icon-security.svg"

function Home() {
    return (
       <div className="container">
        <div className="row align-items-start intro-row">
            <img className="intro-img" src={imgUrl} alt="" />
            <h1>All your files in one secure location,<br/> accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location.</p>
            <p>Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button>Get Started</button>
        </div>
        <div className="row">
            <div style={{textAlign: "center", padding: "3rem"}} className="col">
                <img src={accessImgUrl} alt="" />
                <h3>Access your files, anywhere </h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div style={{textAlign: "center", padding: "3rem"}} className="col">
                <img src={securityImgUrl} alt="" />
                <h3>Security you can trust</h3>
                <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. </p>
            </div>
        </div>
        <div className="row">
            <div className="col"></div>
            <div className="col"></div>
        </div>
       </div> 
      )
}
export default Home