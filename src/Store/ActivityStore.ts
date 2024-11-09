import { createSlice } from "@reduxjs/toolkit";
import Activity from "../Models/Activities/types";

const ActivityStore = createSlice({
  name: "activity",
  initialState: {
    activities: [] as Activity[],
    selectedActivity: null,
    openActivityForm: false,
    isLoading: false,
  },
  reducers: {
    addActivity: (state, action) => {
      action.payload.date = action.payload.date.split("T")[0];
      state.activities.push(action.payload);
    },
    viewActivity: (state, action) => {
      state.selectedActivity = action.payload;
    },
    openNewForm: (state, action) => {
      state.openActivityForm = action.payload;
    },
    setLoadingScreen: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addActivity, viewActivity, openNewForm, setLoadingScreen } =
  ActivityStore.actions;
export default ActivityStore;
