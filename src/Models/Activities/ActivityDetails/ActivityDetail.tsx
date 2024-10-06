import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { useDispatch } from "react-redux";
import Activity from "../types";
import { openNewForm, viewActivity } from "../../../Store/ActivityStore";

type props = {
  activity: Activity;
};
const ActivityDetail = ({ activity }: props) => {
  const dispatch = useDispatch();

  return (
    activity && (
      <Card fluid>
        <Image src={"../../../../public/assests/weddingImage.jpg"} />
        <CardContent>
          <CardHeader>{activity.name}</CardHeader>
          <CardMeta>
            <span>{activity.date}</span>
          </CardMeta>
          <CardDescription>{activity.description}</CardDescription>
        </CardContent>
        <CardContent extra>
          <Button.Group widths={2}>
            <Button
              basic
              color="blue"
              content="Edit"
              onClick={() => {
                dispatch(openNewForm(true));
              }}
            />
            <Button
              basic
              color="grey"
              content="Cancel"
              onClick={() => {
                dispatch(viewActivity(null));
              }}
            />
          </Button.Group>
        </CardContent>
      </Card>
    )
  );
};

export default ActivityDetail;
