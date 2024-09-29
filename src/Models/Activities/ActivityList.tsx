import { Button, Item, Label, Segment } from "semantic-ui-react";
import Activity from "./types";

type props = {
  activities: Activity[];
  viewActivity: (id: number) => void;
  deleteActivity:(id:number)=>void;
};

const ActivityList = ({ activities, viewActivity,deleteActivity }: props) => {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item>
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
                  onClick={() => viewActivity(activity.id)}
                />
                <Button
                  floated="right"
                  content="Delete"
                  color="red"
                  onClick={() => deleteActivity(activity.id)}
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
