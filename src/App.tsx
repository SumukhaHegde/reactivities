import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Activity from "./Models/Activities/types";
import Header from "./Common/Layout/NavBar/Header/Header";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "./Models/Activities/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [openCreateActivityForm, setOpenCreateActivityForm] = useState(false);
  const [viewActivity, setViewActivity] = useState<Activity | undefined>(
    undefined
  );

  const handleViewActivity = (activityId: number) => {
    setViewActivity(activities.find((x) => x.id == activityId));
  };
  const handleCancelOpenForm = () => {
    setOpenCreateActivityForm(false);
  };

  const handleEditForm = (id?: number) => {
    id ? handleViewActivity(id) : handleCancelOpenForm();
    setOpenCreateActivityForm(true);
  };
  const handleCancelViewActivity = () => {
    setViewActivity(undefined);
  };

  const handleCreateEditActivity = (activity: Activity) => {
    activity.id
      ? setActivities([
          ...activities.filter((x) => x.id != activity.id),
          activity,
        ])
      : setActivities([...activities, activity]);
    setOpenCreateActivityForm(false);
    setViewActivity(activity);
  };

  const handleDeleteActivity = (id: number) => {
    setActivities([...activities.filter((x) => x.id !== id)]);
  };

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5254/api/Activity/GetActivities")
      .then((res) => {
        setActivities(res.data);
      });
  }, []);

  return (
    <>
      <Header openCreateActivityForm={handleEditForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          viewActivity={viewActivity}
          handleViewActivity={handleViewActivity}
          handleCancelOpenForm={handleCancelOpenForm}
          handleEditForm={handleEditForm}
          openCreateActivityForm={openCreateActivityForm}
          handleCancelViewActivity={handleCancelViewActivity}
          handleCreateEditActivity={handleCreateEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
