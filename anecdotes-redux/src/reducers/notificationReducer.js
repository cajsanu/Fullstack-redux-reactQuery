import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(_, action) {
      const notification = action.payload;
      const newState = notification;
      return newState;
    },
  },
});

export const { setNotification } = notificationSlice.actions;

const timeout = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const notification = (message, time) => {
  return async (dispatch) => {
    dispatch(setNotification(message));
    await timeout(time * 1000);
    dispatch(setNotification(""));
  };
};

export default notificationSlice.reducer;
