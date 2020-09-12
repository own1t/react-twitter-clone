import React from "react";

import { Avatar, Button } from "@material-ui/core";

import "./TweetBox.css";

function TweetBox() {
  return (
    <>
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/55478023_1526013434202201_902892929817772032_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=b_B5hz_b4tcAX9jP7WY&_nc_ht=scontent.flas1-1.fna&oh=ff572a5193d1e2fb62ff7a3ce2a2f6d6&oe=5F836A71" />
            <input type="text" placeholder=" What's happening?" />
          </div>
          <input
            className="tweetBox__imageInput"
            type="text"
            placeholder=" Optional: Enter image URL"
          />
          <Button className="tweetBox__tweetButton" type="submit">
            Tweet
          </Button>
        </form>
      </div>
    </>
  );
}

export default TweetBox;
