import { useState, useEffect } from "react";
import {
  getFirstDayOfMonth,
  getDaysInMonth,
  dayOfWeek,
} from "../utils/DateUtils";
import { startOfWeek, addDays, parseISO } from "date-fns";

const postMatchByDate = (posts, date) => {
  return posts.filter((post) => {
    const postDate = new Date(post.scheduledTime);
    return (
      postDate.getDate() === date.getDate() &&
      postDate.getMonth() === date.getMonth() &&
      postDate.getFullYear() === date.getFullYear()
    );
  });
};

const isToday = (currentDate, targetDate) => {
  return (
    currentDate.getDate() === targetDate.getDate() &&
    currentDate.getMonth() === targetDate.getMonth() &&
    currentDate.getFullYear() === targetDate.getFullYear()
  );
};

const useCalendar = (year, month, posts, view, week) => {
  const [days, setDays] = useState([]);
  const today = new Date();

  useEffect(() => {
    const updateCalendar = () => {
      if (view === "month") {
        const daysArray = [];
        const firstDay = getFirstDayOfMonth(year, month);
        const daysInMonth = getDaysInMonth(year, month);
        const daysInPreviousMonth = getDaysInMonth(year, month - 1);

        for (
          let i = daysInPreviousMonth - firstDay + 1;
          i <= daysInPreviousMonth;
          i++
        ) {
          const date = new Date(year, month - 1, i);
          const dailyPosts = postMatchByDate(posts, date);
          daysArray.push({
            day: i,
            isCurrentMonth: false,
            isToday: false,
            posts: dailyPosts,
          });
        }

        for (let i = 1; i <= daysInMonth; i++) {
          const date = new Date(year, month, i);
          const isTodayFlag =
            today.getDate() === i &&
            today.getMonth() === month &&
            today.getFullYear() === year;
          const dailyPosts = postMatchByDate(posts, date);
          daysArray.push({
            day: i,
            isCurrentMonth: true,
            isToday: isTodayFlag,
            posts: dailyPosts,
          });
        }

        for (let i = 1; i <= 42 - firstDay - daysInMonth; i++) {
          const date = new Date(year, month + 1, i);
          const dailyPosts = postMatchByDate(posts, date);
          daysArray.push({
            day: i,
            isCurrentMonth: false,
            isToday: false,
            posts: dailyPosts,
          });
        }
        setDays(daysArray);
      } else if (view === "day") {
        const daysArray = [];
        const currentWeekStart = week
          ? parseISO(week)
          : startOfWeek(today, { weekStartsOn: 1 });
        const weekDays = dayOfWeek(currentWeekStart, true, true);

        weekDays.forEach((day, index) => {
          const currentDate = addDays(currentWeekStart, index);
          const dailyPosts = postMatchByDate(posts, currentDate);
          daysArray.push({
            dayNumber: day.dayNumber,
            isToday: isToday(today, currentDate),
            posts: dailyPosts,
          });
        });

        setDays(daysArray);
      }
    };

    updateCalendar();
  }, [year, month, view, week, posts]);

  return days;
};

export default useCalendar;
