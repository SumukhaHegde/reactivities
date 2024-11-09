import { Image, List } from "semantic-ui-react";
import { Profile } from "../Profiles/Profiles";
import { Link } from "react-router-dom";

interface Props {
  attendees: Profile[];
}
const ActivityAttendee = ({ attendees }: Props) => {
  return (
    <List horizontal>
      {attendees.map((attendee) => (
        <List.Item
          key={attendee.username}
          as={Link}
          to={`/profiles/${attendee.username}`}
        >
          <Image
            circular
            size="mini"
            src={attendee.image || "/public/assests/user.avif"}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default ActivityAttendee;
