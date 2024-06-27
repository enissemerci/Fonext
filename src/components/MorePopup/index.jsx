import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPostPopupPosition,
  setSelectedPost,
  setShowMorePopup,
  setShowPostPopup,
} from "../../store/calendarSlice";
import { formatDatetime } from "../../utils/DateUtils";
import { InstagramLogo, LinkedInLogo, XLogo, YoutubeLogo } from "../../icons";

const MorePopup = () => {
  const postRef = useRef(null);

  const { morePopupPosition, selectedDayPosts } = useSelector(
    (state) => state.calendar
  );

  const dispatch = useDispatch();

  const handleLeavePopup = () => {
    dispatch(setShowMorePopup(false));
  };

  const handlePostClick = (post) => {
    const postRect = postRef.current.getBoundingClientRect();

    dispatch(
      setPostPopupPosition({
        top: postRect.top + window.scrollY,
        left: postRect.left + window.scrollX,
      })
    );
    dispatch(setShowPostPopup(true));
    dispatch(setSelectedPost(post));
    handleLeavePopup();
  };

  const platformColor = {
    linkedin: "#0077B5",
    instagram: `linear-gradient(to left top, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69))`,
    x: "#212121",
    youtube: "#FC0404",
  };

  return (
    <div
      className="more-popup-container"
      style={{
        top: `${morePopupPosition.top}px`,
        left: `${morePopupPosition.left}px`,
      }}
      onMouseLeave={handleLeavePopup}
      ref={postRef}
    >
      {selectedDayPosts.map((post) => (
        <div
          className="post-item"
          key={post.id}
          onClick={() => handlePostClick(post)}
        >
          <div className="profile">
            <div
              className="platform"
              style={{ background: platformColor[post.platform] }}
            >
              {post.platform == "linkedin" && (
                <LinkedInLogo width="10" height="10" />
              )}
              {post.platform == "instagram" && (
                <InstagramLogo width="10" height="10" />
              )}
              {post.platform == "x" && <XLogo width="10" height="10" />}
              {post.platform == "youtube" && (
                <YoutubeLogo width="10" height="10" />
              )}
            </div>
            <img src={post.profile} alt="" className="avatar" />
          </div>
          <div className="info">
            <span className="username">{post.username}</span>
            <span className="content">{post.content}</span>
            <span className="date">{formatDatetime(post.scheduledTime)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MorePopup;
