import React from "react";
import Day from "./Day";

const CalendarBody = ({ days }) => (
  <div className="daysContainer">
    {days.map((item, index) => (
      <Day
        key={index}
        day={item.day}
        isToday={item.isToday}
        isDisabled={item.isCurrentMonth}
        posts={item.posts}
      />
    ))}
  </div>
);

export default CalendarBody;
