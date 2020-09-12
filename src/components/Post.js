import React from "react";

import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <>
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/55478023_1526013434202201_902892929817772032_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=b_B5hz_b4tcAX9jP7WY&_nc_ht=scontent.flas1-1.fna&oh=ff572a5193d1e2fb62ff7a3ce2a2f6d6&oe=5F836A71" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Ryan Kim{" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  @ownit
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Test</p>
            </div>
          </div>
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg"
            alt="image from post"
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
