import { Button, Form, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Activity from "../types";
import httpMethod from "../../../Common/Utils/axiosSetup";

const ActivityForm = () => {
  const navigate = useNavigate();
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
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<Activity>({
    defaultValues: initialActivity,
  });

  const options = [
    { value: "marriage", label: "Marrigae" },
    { value: "party", label: "Party" },
    { value: "other", label: "Other" },
  ];

  // const handleInputChange = (
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = event.target;
  // if (name === "date") {
  //   const date = new Date(value); // specific date and time
  //   const IsoDateValue = date.toISOString();
  //   setActivity({ ...activity, [name]: IsoDateValue });
  // } else {
  //   setActivity({ ...activity, [name]: value });
  // };

  const handleActivityFormSubmission = (data: Activity) => {
    if (data.id > 0) {
      const body = {
        activityId: data.id,
        activityName: data.name,
      };
      httpMethod.put("/Activity/UpdateActivityName", body).then((res) => {
      });
      navigate(`/viewActivity/${data.id}`);
    } else {
      httpMethod.post("/Activity/CreateActivity", data).then((res) => {
      });
      navigate("/activities");
    }
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit(handleActivityFormSubmission)}>
        {/* Name Field */}
        <Form.Field>
          <input
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </Form.Field>

        {/* Description Field */}
        <Form.Field>
          <textarea
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
          )}
        </Form.Field>

        {/* Date Field */}
        <Form.Field>
          <input
            placeholder="mm/dd/yyyy"
            type="date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <span style={{ color: "red" }}>{errors.date.message}</span>
          )}
        </Form.Field>

        {/* Category Field */}
        <Form.Field>
          <select
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select a Category</option>
            {options.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <span style={{ color: "red" }}>{errors.category.message}</span>
          )}
        </Form.Field>

        {/* City Field */}
        <Form.Field>
          <input
            placeholder="City"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <span style={{ color: "red" }}>{errors.city.message}</span>
          )}
        </Form.Field>

        {/* Venue Field */}
        <Form.Field>
          <input
            placeholder="Venue"
            {...register("venue", { required: "Venue is required" })}
          />
          {errors.venue && (
            <span style={{ color: "red" }}>{errors.venue.message}</span>
          )}
        </Form.Field>

        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
