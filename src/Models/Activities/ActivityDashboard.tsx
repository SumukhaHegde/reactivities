import { Grid } from "semantic-ui-react";
import Activity from "./types";
import ActivityList from "./ActivityList";
import ActivityDetail from "./ActivityDetails/ActivityDetail";
import ActivityForm from "./ActivityDetails/ActivityForm";
import { useSelector } from "react-redux";

const ActivityDashboard = () => {
  const { openActivityForm, selectedActivity } = useSelector(
    (store) => store.ActivityStore
  );

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !openActivityForm && (
          <ActivityDetail activity={selectedActivity} />
        )}

        {openActivityForm && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
};
export default ActivityDashboard;
