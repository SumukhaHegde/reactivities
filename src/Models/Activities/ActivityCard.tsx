import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import Activity from "./types";
import httpMethod from "../../Common/Utils/axiosSetup";
import { Link, useNavigate } from "react-router-dom";
import { act } from "react";

type props = {
  activity: Activity;
};
const ActivityCard = ({ activity }: props) => {
  const navigate = useNavigate();
  const handleDeleteActivity = (id: number) => {
    httpMethod
      .delete("/Activity/DeleteActivityById", { params: { id: id } })
      .then((res) => {
        console.log(res);
      });
  };

  const handleViewActivity = (id: number) => {
    navigate(`/viewActivity/${id}`);
  };

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src="../../../public/assests/user.avif"
              bordered
            />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.name}
              </Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" />
          {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendess go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          onClick={() => handleViewActivity(activity.id)}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityCard;
