import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import Activity from "./types";
import httpMethod from "../../Common/Utils/axiosSetup";
import { Link, useNavigate } from "react-router-dom";
import ActivityAttendee from "./ActivityAttendee";
import { useDispatch, useSelector } from "react-redux";
import { act, useEffect, useState } from "react";
import { UserTypes } from "../Profiles/UserTypes";
import { registerLoggedInUser } from "../../Store/LoggedInUserStore";

type props = {
  activity: Activity;
};
const ActivityCard = ({ activity }: props) => {
  const navigate = useNavigate();
  const user: UserTypes = useSelector((store) => store.LoggedInUserStore.user);
  const handleDeleteActivity = (id: number) => {
    httpMethod
      .delete("/Activity/DeleteActivityById", { params: { id: id } })
      .then((res) => {});
  };
  const handleViewActivity = (id: number) => {
    navigate(`/viewActivity/${id}`);
  };
  //  console.log(user.userId === activity.hostId);
  // console.log("userId" + user.userId);

  // useEffect(() => {
  //   setAttendingActivity(
  //     activity.attendees?.some((a) => a.userId === Number.parseInt(user.id))
  //   );
  // });

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
              <Item.Description>
                Hosted by{" "}
                <strong>{activity.hostName?.toLocaleUpperCase()}</strong>
              </Item.Description>

              {user?.id === activity.hostId && (
                <Item.Description>
                  <Label basic color="green">
                    You are hosting this activity
                  </Label>
                </Item.Description>
              )}

              {activity.isGoing &&
                !activity.isHost &&
                user?.id !== activity.hostId && (
                  <Item.Description>
                    <Label basic color="orange">
                      You are attending this activity
                    </Label>
                  </Item.Description>
                )}

              {!activity.isGoing && (
                <Item.Description>
                  <Label basic color="blue">
                    You are not attending this activity
                  </Label>
                </Item.Description>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" style={{ marginLeft: "1.5em" }} />
          {activity.venue}
        </span>
      </Segment>
      <Segment secondary>
        <ActivityAttendee attendees={activity.attendees!} />
      </Segment>
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
