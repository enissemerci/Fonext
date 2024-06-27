// calendarSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { startOfWeek } from "date-fns";
import posts from "../posts.json";

const today = new Date();

const initialState = {
  year: today.getFullYear(),
  month: today.getMonth(),
  week: startOfWeek(new Date(), { weekStartsOn: 1 }).toISOString(),
  posts,
  view: "day",
  selectedDayPosts: [],
  showMorePopup: false,
  morePopupPosition: {
    top: 0,
    left: 0,
  },
  selectedPost: {},
  showPostPopup: false,
  postPopupPosition: {
    top: 0,
    left: 0,
  },
  badgeHeight: 0,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setWeek: (state, action) => {
      state.week = action.payload;
    },
    resetToToday: (state) => {
      const today = new Date();
      state.year = today.getFullYear();
      state.month = today.getMonth();
      state.week = startOfWeek(today, { weekStartsOn: 1 }).toISOString();
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedDayPosts: (state, action) => {
      state.selectedDayPosts = action.payload;
    },
    setMorePopupPosition: (state, action) => {
      state.morePopupPosition = action.payload;
    },
    setShowMorePopup: (state, action) => {
      state.showMorePopup = action.payload;
    },
    setShowPostPopup: (state, action) => {
      state.showPostPopup = action.payload;
    },
    setPostPopupPosition: (state, action) => {
      state.postPopupPosition = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setBadgeHeight: (state, action) => {
      state.badgeHeight = action.payload;
    },
  },
});

export const {
  setYear,
  setMonth,
  setWeek,
  resetToToday,
  setView,
  setPosts,
  setSelectedDayPosts,
  setMorePopupPosition,
  setShowMorePopup,
  setShowPostPopup,
  setPostPopupPosition,
  setSelectedPost,
  setBadgeHeight,
} = calendarSlice.actions;

export default calendarSlice.reducer;
