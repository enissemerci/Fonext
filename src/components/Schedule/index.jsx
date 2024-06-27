import React from "react";
import { useSelector } from "react-redux";

import CalendarHeader from "./CalendarHeader.jsx";
import WeekDays from "./WeekDays";
import CalendarBody from "./CalendarBody.jsx";
import MorePopup from "../MorePopup";
import PostPopup from "../PostPopup";

import useCalendar from "../../hooks/useCalendar.js";
import DayOfWeek from "./dayOfWeek.jsx";

const Schedule = () => {
  const { year, month, week, posts, view, showMorePopup, showPostPopup } =
    useSelector((state) => state.calendar);

  const days = useCalendar(year, month, posts, view, week);
  return (
    <div className="calendar">
      <CalendarHeader />
      <WeekDays />
      {view === "month" ? (
        <CalendarBody days={days} />
      ) : (
        <div className="days-of-week">
          {days.map((day, index) => (
            <DayOfWeek key={index} day={day} />
          ))}
        </div>
      )}
      {showMorePopup && <MorePopup />}
      {showPostPopup && <PostPopup />}
    </div>
  );
};

export default Schedule;
