import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedDayPosts,
  setMorePopupPosition,
  setShowMorePopup,
} from "../../store/calendarSlice";

import Badge from "../Badge";

const DayOfWeek = ({ day, isToday, posts }) => {
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

  return (
    <span
      className="day-of-week"
      style={{ background: day.isToday ? "#1557ff" : "" }}
    >
      {day.posts.map((post, index) => (
        <Badge key={index} post={post} />
      ))}
    </span>
  );
};

export default DayOfWeek;
