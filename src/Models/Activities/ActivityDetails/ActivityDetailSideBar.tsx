import { Link } from "react-router-dom";
import { Segment, List, Item, Label, Image } from "semantic-ui-react";
import { Profile } from "../../Profiles/Profiles";

interface Props {
  attendees: Profile[];
}
const ActivityDetailSideBar = ({ attendees }: Props) => {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        3 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees.map((attendee) => (
            <Item style={{ position: "relative" }}>
              <Label
                style={{ position: "absolute" }}
                color="orange"
                ribbon="right"
              >
                Host
              </Label>
              <Image
                size="tiny"
                src={attendee.image || "../../../../public/assests/user.avif"}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`/profiles/${attendee.username}`}>Bob</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>Following</Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </List>
      </Segment>
    </>
  );
};

export default ActivityDetailSideBar;
