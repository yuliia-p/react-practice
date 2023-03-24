import React from "react";
import imgUrl from "../assets/illustration-intro.png"
import accessImgUrl from "../assets/icon-access-anywhere.svg"
import securityImgUrl from "../assets/icon-security.svg"
import collabUrl from "../assets/icon-collaboration.svg"
import fileUrl from "../assets/icon-any-file.svg"
import productiveUrl from "../assets/illustration-stay-productive.png"

function Home() {
    return (
       <div className="container">
        <div className="row align-items-start intro-row">
            <img className="intro-img" src={imgUrl} alt="" />
            <h1>All your files in one secure location,<br/> accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location.</p>
            <p >Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button>Get Started</button>
        </div>
        <div className="row dark-bg">
            <div style={{textAlign: "center", padding: "3rem"}} className="col">
                <img src={accessImgUrl} alt="" />
                <h3>Access your files, anywhere </h3>
                <p style={{padding: "0 4rem"}}>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div style={{textAlign: "center", padding: "3rem"}} className="col">
                <img src={securityImgUrl} alt="" />
                <h3>Security you can trust</h3>
                <p style={{padding: "0 4rem"}}>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. </p>
            </div>
        </div>
        <div className="row">
            <div style={{textAlign: "center", padding: "3rem"}} className="col">
                <img src={collabUrl} alt="" />
                <h3>Real-time collaboration</h3>
                <p style={{padding: "0 4rem"}}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
            <div style={{textAlign: "center", padding: "3rem"}} className="col">
                <img src={fileUrl} alt="" />
                <h3>Store any type of file</h3>
                <p style={{padding: "0 4rem"}}>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared</p>
            </div>
        </div>
        <div style={{alignItems: "center"}} className="row">
            <div className="col">
                <img src={productiveUrl} alt="" />
            </div>
            <div className="col">
                <h1>Stay productive, <br/> wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a href="#">See how Fylo works</a>
            </div>

        </div>
       </div> 
      )
}
export default Home