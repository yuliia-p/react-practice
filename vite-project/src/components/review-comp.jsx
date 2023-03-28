import React from "react";
import { reviews } from "../review";
console.log('hello')

function Reviews(props) {

    const review = props.map((el, index) => {
        console.log('el', el)
    return (
        <div key={index} className="col">
            <p>{el.review}</p>
            <img src={el.profileImg} alt="" />
            <p>{el.userName}</p>
            <p>{el.position}</p>
        </div>
    )
})
console.log('review', review)

    return(
        <div className="row">
            {review}
        </div>
    )
}
export default Reviews;