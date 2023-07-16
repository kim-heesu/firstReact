import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:'김히수',
        comment:'안녕 나는 히수야'
    },
    {
        name:'김뽀대',
        comment:'안녕 나는 뽀대야'
    },
    {
        name:'김삼다수',
        comment:'안녕 나는 삼다수야'
    }
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;