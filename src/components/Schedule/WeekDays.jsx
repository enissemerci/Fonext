import React, { useState, useEffect } from "react";
import { dayOfWeek } from "../../utils/DateUtils";
import { startOfWeek } from "date-fns";
import { useSelector } from "react-redux";

const WeekDays = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [weekDays, setWeekDays] = useState([]);
  const { view, week } = useSelector((state) => state.calendar);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newWeekStart = startOfWeek(week, { weekStartsOn: 1 });
    const daysArray = dayOfWeek(newWeekStart, isMobile);
    setWeekDays(daysArray);
  }, [isMobile, week]);

  return (
    <div className="weekDays">
      {weekDays.map((day, index) => (
        <div key={index} className="weekDay">
          {day.dayName} {view == "day" && day.dayNumber}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
