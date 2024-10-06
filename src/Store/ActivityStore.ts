import { createSlice } from "@reduxjs/toolkit";
import Activity from "../Models/Activities/types";

const ActivityStore = createSlice({
  name: "activity",
  initialState: {
    activities: [],
    selectedActivity: null,
    openActivityForm: false,
  },
  reducers: {
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    viewActivity: (state, action) => {
      state.selectedActivity = action.payload;
    },
    openNewForm: (state, action) => {
      state.openActivityForm = action.payload;
    },
  },
});

export const { addActivity, viewActivity, openNewForm } = ActivityStore.actions;
export default ActivityStore;
