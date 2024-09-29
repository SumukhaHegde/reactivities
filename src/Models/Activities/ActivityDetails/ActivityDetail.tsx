import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import Activity from "../types";

type props = {
  activity: Activity;
  handleEditForm: (id: number) => void;
  handleCancelViewActivity: () => void;
};
const ActivityDetail = ({
  activity,
  handleEditForm,
  handleCancelViewActivity,
}: props) => {
  return (
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
              handleEditForm(activity.id);
            }}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={handleCancelViewActivity}
          />
        </Button.Group>
      </CardContent>
    </Card>
  );
};

export default ActivityDetail;
