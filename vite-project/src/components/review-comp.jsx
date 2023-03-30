import React from "react";
import { reviews } from "../review";
console.log('hello')

function Reviews(props) {

    const review = props.map((el, index) => {
        console.log('el', el)
    return (
        <div key={index} className="col review-box">
            <p>{el.review}</p>
            <div style={{display: "flex"}}>
                <div>
                    <img className="profile-img" src={el.profileImg} alt="" />
                </div>
                <div>
                    <p style={{fontWeight: "bold"}}>{el.userName}</p>
                    <p>{el.position}</p>
                </div>
            </div>
        </div>
    )
})
console.log('review', review)

    return(
        <div className="row review-row">
            {review}
        </div>
    )
}
export default Reviews;