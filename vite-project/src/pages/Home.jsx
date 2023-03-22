import React from "react";
import imgUrl from "../assets/illustration-intro.png"

function Home() {
    return (
       <div className="container">
        <div className="row align-items-start intro-row">
            <img className="intro-img" src={imgUrl} alt="" />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button>Get Started</button>
        </div>
       </div> 
      )
}
export default Home