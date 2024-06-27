import { format, startOfWeek, addDays } from "date-fns";
import { tr } from "date-fns/locale";

export const getFirstDayOfMonth = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const formatDatetime = (datetime) => {
  return new Date(datetime).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const dayOfWeek = (date = new Date(), isShort = true) => {
  const dayFormat = isShort ? "eee" : "eeee";

  const weekStart = startOfWeek(date, { weekStartsOn: 1 });
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(weekStart, i);
    const dayOfWeek = format(currentDate, dayFormat, { locale: tr });
    const dayOfMonth = format(currentDate, "d", { locale: tr });
    weekDays.push({
      dayName: dayOfWeek,
      dayNumber: dayOfMonth,
    });
  }

  return weekDays;
};
