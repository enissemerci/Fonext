import React, { useRef, useState, useEffect } from "react";

import {
  setSelectedPost,
  setShowPostPopup,
  setPostPopupPosition,
  setBadgeHeight,
} from "../../store/calendarSlice";
import { InstagramLogo, LinkedInLogo, XLogo, YoutubeLogo } from "../../icons";
import { useDispatch, useSelector } from "react-redux";

const Badge = ({ post }) => {
  const badgeRef = useRef(null);
  const { badgeHeight } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const platformColor = {
    linkedin: "#0077B5",
    instagram: `linear-gradient(to left top, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69))`,
    x: "#212121",
    youtube: "#FC0404",
  };

  const handleBadgeClick = () => {
    const badgeRect = badgeRef.current.getBoundingClientRect();

    dispatch(
      setPostPopupPosition({
        top: badgeRect.top + window.scrollY,
        left: badgeRect.left + window.scrollX,
      })
    );
    dispatch(setShowPostPopup(true));
    dispatch(setSelectedPost(post));
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      const badgeHeight = badgeRef.current.clientHeight;
      dispatch(setBadgeHeight(badgeHeight));

      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={badgeRef}
      className="badge-container"
      style={{
        background: platformColor[post.platform],
        padding: `${isMobile ? "4px" : "4px 8px"}`,
        width: `${isMobile ? "auto" : "100%"}`,
      }}
      onClick={handleBadgeClick}
    >
      {!isMobile && (
        <>
          {post.platform == "linkedin" && (
            <LinkedInLogo width="12" height="12" />
          )}
          {post.platform == "instagram" && (
            <InstagramLogo width="12" height="12" />
          )}
          {post.platform == "x" && <XLogo width="12" height="12" />}
          {post.platform == "youtube" && <YoutubeLogo width="12" height="12" />}
          <span className="username">{post.username}</span>
        </>
      )}
    </div>
  );
};

export default Badge;
