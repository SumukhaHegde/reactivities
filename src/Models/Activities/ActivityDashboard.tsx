import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetail from "./ActivityDetails/ActivityDetail";
import ActivityForm from "./ActivityDetails/ActivityForm";
import { useSelector } from "react-redux";
import ActivityFilter from "./ActivityDetails/ActivityFilter";

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
        <ActivityFilter />
      </Grid.Column>
    </Grid>
  );
};
export default ActivityDashboard;
