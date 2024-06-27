import React from "react";
import { useSelector } from "react-redux";

import { InstagramLogo, LinkedInLogo, XLogo, YoutubeLogo } from "../../icons";
const PostPopupHeader = () => {
  const { selectedPost } = useSelector((state) => state.calendar);
  const platformColor = {
    linkedin: "#0077B5",
    instagram: `linear-gradient(to left top, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69))`,
    x: "#212121",
    youtube: "#FC0404",
  };

  const statusColor = {
    cancelled: "#ff4c30",
    published: "#1557ff",
    scheduled: "#f3e16b",
    draft: "#6c7a89",
  };

  return (
    <div className="post-popup-header">
      <div className="data">
        <div className="profile">
          <div
            className="platform"
            style={{ background: platformColor[selectedPost.platform] }}
          >
            {selectedPost.platform == "linkedin" && (
              <LinkedInLogo width="10" height="10" />
            )}
            {selectedPost.platform == "instagram" && (
              <InstagramLogo width="10" height="10" />
            )}
            {selectedPost.platform == "x" && <XLogo width="10" height="10" />}
            {selectedPost.platform == "youtube" && (
              <YoutubeLogo width="10" height="10" />
            )}
          </div>
          <img src={selectedPost.profile} alt="" className="avatar" />
        </div>
        <div className="info">
          <span className="username">{selectedPost.username}</span>
        </div>
      </div>
      <span
        className="status"
        style={{
          background: statusColor[selectedPost.status],
        }}
      >
        {selectedPost.status}
      </span>
    </div>
  );
};

export default PostPopupHeader;
