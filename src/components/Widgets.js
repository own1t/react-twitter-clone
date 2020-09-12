import React from "react";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

import "./Widgets.css";

function Widgets() {
  return (
    <>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={"1162313875083157504"} />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="reactjs"
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={"https://www.facebook.com/react"}
            options={{ text: "#reactjs is awesome", via: "reactjs" }}
          />
        </div>
      </div>
    </>
  );
}

export default Widgets;
