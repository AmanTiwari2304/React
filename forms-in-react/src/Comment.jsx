import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentForm"


export default function Comment() {
    let [comment, setComment] = useState([{
        username : "@rohan",
        remarks: "Nice, happy to use !",
        rating: 4
    }])

    let addNewComment = (comment) => {
        setComment((currComment) => [...currComment, comment])
    }
    return(
        <div>
            <h3>All Comments</h3>
            {comment.map((comment, idx) => (
                <div className="Comment" key={idx}>
                    <span>{comment.remarks}</span>
                    <br />
                    &nbsp;&nbsp;
                    <span>[rating : {comment.rating}]</span>
                    <br />
                    &nbsp;&nbsp;
                    <span>- {comment.username}</span>
                </div>
            ))}
            <hr />
            
            <CommentForm addNewComment = {addNewComment}/>
        </div>
    )
} 