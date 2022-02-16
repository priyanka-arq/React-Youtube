import moment from "moment";
import numeral from "numeral";
import React, { useEffect } from "react";

import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import "./_comment.scss";

export default function Comment({ comment }) {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    textDisplay,
    likeCount,
    publishedAt,
  } = comment;
  return (
    <div className="comment p-2 d-flex">
      <img src={authorProfileImageUrl} alt="" className="rounded-circle mr-3" />
      <div className="comment__body">
        <p className="comment__header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p>{textDisplay}</p>
        <div>
          <span className="mr-3" style={{ marginRight: "10px" }}>
            <FiThumbsUp size={26} />
          </span>
          <span style={{ marginRight: "10px" }}>
            {numeral(likeCount).format("0.a")}
          </span>
          <span className="mr-3" style={{ marginRight: "10px" }}>
            <FiThumbsDown size={26} />
          </span>
          <button>REPLY</button>
        </div>
      </div>
    </div>
  );
}
