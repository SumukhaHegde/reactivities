import { configureStore } from "@reduxjs/toolkit";
import ActivityStore from "./ActivityStore";
import LoggedInUserStore from "./LoggedInUserStore";

const AppStore = configureStore({
  reducer: {
    ActivityStore: ActivityStore.reducer,
    LoggedInUserStore: LoggedInUserStore.reducer,
  },
});

export default AppStore;
