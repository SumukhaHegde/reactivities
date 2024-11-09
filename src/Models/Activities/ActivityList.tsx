import { Header, Item, Segment } from "semantic-ui-react";
import Activity from "./types";
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from "./ActivityCard";
import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import httpMethod from "../../Common/Utils/axiosSetup";
import { addActivity } from "../../Store/ActivityStore";
import { UserTypes } from "../Profiles/UserTypes";

const ActivityList = () => {
  const dispatch = useDispatch();

  const activities: Activity[] = useSelector(
    (store) => store.ActivityStore.activities
  );

  const user: UserTypes = useSelector((store) => store.LoggedInUserStore.user);

  const getGroupedActivitesByDate = () => {
    const sortedActivities = Array.from(activities).sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
    return Object.entries(
      sortedActivities.reduce((activities, activity) => {
        const date = activity.date;
        activities[date] = activities[date]
          ? [...activities[date], activity]
          : [activity];
        return activities;
      }, {} as { [key: string]: Activity[] })
    );
  };
  const groupedActivites = getGroupedActivitesByDate();

  useEffect(() => {
    httpMethod.get("/Activity/GetActivities", {}).then((res) => {
      res.map((x: Activity) => {
        console.log(user);
        x.isGoing = x.attendees?.some((a) => a.userId === user.id);

        dispatch(addActivity(x));
      });
    });
  }, []);

  return (
    <>
      {groupedActivites.map(([groupName, activities]) => {
        return (
          <Fragment key={groupName}>
            <Header sub color="teal">
              {groupName}
            </Header>
            {activities.map((activity) => (
              <ActivityCard activity={activity} key={activity.id} />
            ))}
          </Fragment>
        );
      })}
    </>
  );
};

export default ActivityList;
