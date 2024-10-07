import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import AppStore from "./Store/Appstore.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActivityForm from "./Models/Activities/ActivityDetails/ActivityForm.tsx";
import ActivityDashboard from "./Models/Activities/ActivityDashboard.tsx";
import ActivityDetail from "./Models/Activities/ActivityDetails/ActivityDetail.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/createActivity",
        element: <ActivityForm />,
      },
      {
        path: "/activities",
        element: <ActivityDashboard />,
      },
      {
        path: "/viewActivity/:id",
        element: <ActivityDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={AppStore}>
    <RouterProvider router={route} />
  </Provider>
);
