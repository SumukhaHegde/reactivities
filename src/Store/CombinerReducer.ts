import { combineReducers } from "@reduxjs/toolkit";
import activityReducer from "./ActivityStore";
import loggedInUserReducer from "./LoggedInUserStore";

const rootReducer = combineReducers({
  activity: activityReducer,
  loggedInUser: loggedInUserReducer,
  // Add more slices here as needed
});

export default rootReducer;
