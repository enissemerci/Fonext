import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMonth,
  setYear,
  setView,
  setWeek,
  resetToToday,
} from "../../store/calendarSlice";
import {
  addWeeks,
  subWeeks,
  endOfWeek,
  startOfWeek,
  startOfMonth,
} from "date-fns";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { year, month, view, week } = useSelector((state) => state.calendar);

  const handleDateChange = (increment) => {
    if (view === "day") {
      const currentWeek = new Date(week);
      const newWeek =
        increment > 0 ? addWeeks(currentWeek, 1) : subWeeks(currentWeek, 1);

      const newStartMonth = startOfMonth(newWeek).getMonth(); // Start of the month for the new week
      let newYear = newWeek.getFullYear();

      dispatch(setWeek(newWeek.toISOString()));
      dispatch(setMonth(newStartMonth));
      dispatch(setYear(newYear));
    } else {
      const newMonth = (month + increment + 12) % 12; // Ensure positive modulo
      let newYear = year + Math.floor((month + increment) / 12);

      dispatch(setMonth(newMonth));
      dispatch(setYear(newYear));

      const currentDate = new Date(year, newMonth, 1);
      const newWeekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
      dispatch(setWeek(newWeekStart.toISOString()));
    }
  };

  const handleTodayClick = () => {
    dispatch(resetToToday());
  };

  const monthToName = () => {
    if (view === "day") {
      const currentWeek = new Date(week);
      const startMonth = currentWeek.getMonth();
      const endMonth = endOfWeek(currentWeek, { weekStartsOn: 1 }).getMonth();

      const startMonthName = currentWeek.toLocaleString("default", {
        month: startMonth !== endMonth ? "short" : "long",
      });

      const endMonthName = endOfWeek(currentWeek, {
        weekStartsOn: 1,
      }).toLocaleString("default", {
        month: startMonth !== endMonth ? "short" : "long",
      });

      return startMonth === endMonth
        ? startMonthName
        : `${startMonthName}-${endMonthName}`;
    } else {
      const date = new Date(year, month, 1);
      return date.toLocaleString("default", { month: "long" });
    }
  };

  const handleViewChange = (newView) => {
    dispatch(setView(newView));
  };

  return (
    <div className="calendar-header">
      <button onClick={handleTodayClick} className="btn">
        Bugün
      </button>
      <div className="changer">
        <button onClick={() => handleDateChange(-1)} className="btn btn-icon">
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 1024 1024"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
              fill="#000000"
            />
          </svg>
        </button>
        <div className="date">
          <span className="date__month">{monthToName()}</span>{" "}
          <span className="date__year">{year}</span>
        </div>
        <button onClick={() => handleDateChange(1)} className="btn btn-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
          >
            <path
              d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
      <div className="format toggle">
        <button
          className={`btn ${view === "month" ? "active" : ""}`}
          onClick={() => handleViewChange("month")}
        >
          Ay
        </button>
        <button
          className={`btn ${view === "day" ? "active" : ""}`}
          onClick={() => handleViewChange("day")}
        >
          Gün
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
