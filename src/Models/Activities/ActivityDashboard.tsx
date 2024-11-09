import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useDispatch, useSelector } from "react-redux";
import ActivityFilter from "./ActivityDetails/ActivityFilter";
import { useEffect } from "react";
import httpMethod from "../../Common/Utils/axiosSetup";
import { registerLoggedInUser } from "../../Store/LoggedInUserStore";

const ActivityDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    httpMethod.get("/User/GetloggedInUserDetails").then((res) => {
      dispatch(registerLoggedInUser(res));
    });
  }, []);

  return (
    <>
      <Grid>
        <Grid.Column width="10">
          <ActivityList />
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityFilter />
        </Grid.Column>
      </Grid>
    </>
  );
};
export default ActivityDashboard;
