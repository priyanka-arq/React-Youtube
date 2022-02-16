import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsDetails,
} from "../../redux/actions/commentListAction";

export default function Comments({ videoId, totalComments }) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const { photoURL } = useSelector((state) => state.auth?.user);
  const comments = useSelector((state) => state.commentList.comments);
  const _comments = comments?.map(
    (comment) => comment?.snippet.topLevelComment.snippet
  );

  useEffect(() => {
    dispatch(getCommentsDetails(videoId));
  }, [dispatch, videoId]);

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    //dispatch(getCommentsDetails(videoId));
    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img src={photoURL} alt="" className="rounded-circle mr-3" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            value={text}
            placeholder="Commenting publicly as ..."
            className="flex-grow-1"
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
}
