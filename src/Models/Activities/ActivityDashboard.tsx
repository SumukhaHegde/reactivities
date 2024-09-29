import { Grid } from "semantic-ui-react";
import Activity from "./types";
import ActivityList from "./ActivityList";
import ActivityDetail from "./ActivityDetails/ActivityDetail";
import ActivityForm from "./ActivityDetails/ActivityForm";

type props = {
  activities: Activity[];
  viewActivity: Activity | undefined;
  handleViewActivity: (id: number) => void;
  handleCancelOpenForm: () => void;
  handleEditForm: (id: number) => void;
  openCreateActivityForm: boolean;
  handleCreateEditActivity: (activity: Activity) => void;
  handleCancelViewActivity: () => void;
  deleteActivity: (id: number) => void;
};

const ActivityDashboard = ({
  activities,
  viewActivity,
  handleViewActivity,
  handleCancelOpenForm,
  handleEditForm,
  openCreateActivityForm,
  handleCancelViewActivity,
  handleCreateEditActivity,
  deleteActivity,
}: props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          viewActivity={handleViewActivity}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {viewActivity && !openCreateActivityForm && (
          <ActivityDetail
            activity={viewActivity}
            handleEditForm={handleEditForm}
            handleCancelViewActivity={handleCancelViewActivity}
          />
        )}

        {openCreateActivityForm && (
          <ActivityForm
            cancelForm={handleCancelOpenForm}
            activity={viewActivity}
            handleCreateEditActivity={handleCreateEditActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
export default ActivityDashboard;
