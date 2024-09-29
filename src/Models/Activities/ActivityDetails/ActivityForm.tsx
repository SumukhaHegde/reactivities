import { Button, Form, Segment } from "semantic-ui-react";
import Activity from "../types";
import { ChangeEvent, useState } from "react";

type props = {
  cancelForm: () => void;
  activity: Activity | undefined;
  handleCreateEditActivity: (activity: Activity) => void;
};
const ActivityForm = ({
  cancelForm,
  activity: selectedActivity,
  handleCreateEditActivity,
}: props) => {
  const initialActivity = selectedActivity ?? {
    id: 0,
    name: "",
    description: "",
    date: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialActivity);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = () => {
    handleCreateEditActivity(activity);
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Name"
          value={activity.name}
          name="name"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button floated="right" positive color="green" content="Submit" />
        <Button
          floated="right"
          color="grey"
          content="Cancel"
          onClick={cancelForm}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
