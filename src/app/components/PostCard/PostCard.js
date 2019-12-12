import React from "react";
import "./PostCard.css";
const PostCard = props => {
  return (
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={props.img} />
          </div>
          <div className="card-content">
            <p>{props.desc}</p>
          </div>
          <div className="card-action">
            <div className="postcard-action">
              <span className="postcard">Author: {props.name}</span>
              <span className="postcard_coments">
                Comments:{props.numberOfComments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
