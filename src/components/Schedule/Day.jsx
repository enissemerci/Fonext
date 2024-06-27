import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedDayPosts,
  setMorePopupPosition,
  setShowMorePopup,
} from "../../store/calendarSlice";

import Badge from "../Badge";

const Day = ({ day, isToday, isDisabled, posts }) => {
  const dayRef = useRef(null);
  const moreRef = useRef(null);
  const dispatch = useDispatch();

  const [maxPostsDisplayed, setMaxPostsDisplayed] = useState(0);
  const [remainingPosts, setRemainingPosts] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const calculateMaxPosts = () => {
      if (dayRef.current && moreRef.current) {
        const dayHeight = dayRef.current.offsetHeight;
        const moreHeight = moreRef.current.clientHeight;

        const availableHeight = dayHeight - moreHeight;
        const maxPosts = Math.floor(availableHeight / 40);

        setMaxPostsDisplayed(maxPosts);
        setRemainingPosts(posts.length - maxPosts);
      }
    };

    calculateMaxPosts();

    const handleResize = () => {
      calculateMaxPosts();
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [posts]);

  const handleDayClick = () => {
    if (remainingPosts > 0) {
      const dayRect = dayRef.current.getBoundingClientRect();

      dispatch(
        setMorePopupPosition({
          top: dayRect.top + window.scrollY,
          left: dayRect.left + window.scrollX,
        })
      );
      dispatch(setShowMorePopup(true));
      dispatch(setSelectedDayPosts(posts));
    }
  };
  isDisabled = isDisabled == undefined ? true : isDisabled;
  return (
    <div
      className={`day ${isToday ? "today" : !isDisabled ? "disableDay" : ""}`}
      ref={dayRef}
    >
      <span>{day}</span>
      <div className="badges">
        {posts.slice(0, maxPostsDisplayed).map((post) => (
          <Badge key={post.id} post={post} />
        ))}
        {posts.length > maxPostsDisplayed && (
          <span className="more" ref={moreRef} onClick={handleDayClick}>
            +{remainingPosts} {!isMobile && "Gönderi"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Day;
