import moment from "moment-timezone";
import React, { useState } from "react";

function Comment({ Comments }) {
  return (
    <div id="comments-list" className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        {Comments?.map((index) => (
          <div className="comment-item" key={index._id}>
            <ul>
              <li>
                <b>{index.full_name}</b>
              </li>
              <li>{moment(index.updatedAt).fromNow()}</li>
              <li>
                <p>{index.body}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
