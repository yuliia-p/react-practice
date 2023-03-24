import React from "react";
import { reviews } from "../review";

function Reviews() {

    const review = reviews.map((el, index) => {
        console.log('review', review)
    return (
        <div key={index} className="col">
            <p>{el.review}</p>
            <p>{el.profileImg}</p>
            <p>{el.userName}</p>
            <p>{el.position}</p>
        </div>
    )
})
    return(
     <>{review}</>
    )
}
export default Reviews;