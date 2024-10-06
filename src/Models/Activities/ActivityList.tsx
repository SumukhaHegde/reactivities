import { Button, Item, Label, Segment } from "semantic-ui-react";
import Activity from "./types";
import { useDispatch, useSelector } from "react-redux";
import { viewActivity } from "../../Store/ActivityStore";
import httpMethod from "../../Common/Utils/axiosSetup";

const ActivityList = () => {
  const dispatch = useDispatch();
  const activities: Activity[] = useSelector(
    (store) => store.ActivityStore.activities
  );

  const handleDeleteActivity = (id: number) => {
    httpMethod
      .delete("/Activity/DeleteActivityById", { params: { id: id } })
      .then((res) => {
        console.log(res);
      });
      
  };

  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header>{activity.name}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.venue}, {activity.city}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => dispatch(viewActivity(activity))}
                />
                <Button
                  floated="right"
                  content="Delete"
                  color="red"
                  onClick={() => handleDeleteActivity(activity.id)}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
