import { configureStore } from "@reduxjs/toolkit";
import ActivityStore from "./ActivityStore";

const AppStore = configureStore({
  reducer: {
    ActivityStore: ActivityStore.reducer,
  },
});

export default AppStore;
