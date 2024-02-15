import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification", 
    initialState: "",
    reducers: {
        setNotification(_, action) {
            const notification = action.payload
            const newState = notification
            return newState
        },
        removeNotification(state, action) {
            const remove = action.payload
            const newState = remove
            return newState
        }
    }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer