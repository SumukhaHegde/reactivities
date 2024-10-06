import { Button, Form, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openNewForm } from "../../../Store/ActivityStore";
import httpMethod from "../../../Common/Utils/axiosSetup";

const ActivityForm = () => {
  const dispatch = useDispatch();
  const selectedActivity = useSelector(
    (store) => store.ActivityStore.selectedActivity
  );
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
    // if (name === "date") {
    //   const date = new Date(value); // specific date and time
    //   const IsoDateValue = date.toISOString();
    //   setActivity({ ...activity, [name]: IsoDateValue });
    // } else {
    setActivity({ ...activity, [name]: value });
  };

  const handleActivityFormSubmission = () => {
    if (activity.id > 0) {
      const body = {
        activityId: activity.id,
        activityName: activity.name,
      };
      httpMethod.put("/Activity/UpdateActivityName", body).then((res) => {
        console.log(res);
      });
    } else {
      httpMethod.post("/Activity/CreateActivity", activity).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleActivityFormSubmission}>
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
          type="date"
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
          onClick={() => dispatch(openNewForm(false))}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
