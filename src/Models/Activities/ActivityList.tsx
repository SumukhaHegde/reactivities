import { Header, Item, Segment } from "semantic-ui-react";
import Activity from "./types";
import { useSelector } from "react-redux";
import ActivityCard from "./ActivityCard";
import { Fragment } from "react/jsx-runtime";

const ActivityList = () => {
  const activities: Activity[] = useSelector(
    (store) => store.ActivityStore.activities
  );

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
