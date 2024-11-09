import { useForm } from "react-hook-form";
import { Button, Form, Segment } from "semantic-ui-react";
import LoginType from "./LoginTypes";
import httpMethod from "../../Common/Utils/axiosSetup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoadingScreen } from "../../Store/ActivityStore";
import { registerLoggedInUser } from "../../Store/LoggedInUserStore";

const Login = () => {
  const [userError, setUserError] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleActivityFormSubmission = (data: LoginType) => {
    httpMethod
      .post("/Auth/Login", data)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          navigate("/activities");
        }
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          setUserError("Invalid Username or Password");
        }
      });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit(handleActivityFormSubmission)}>
        <Form.Field>
          <input
            placeholder="User name"
            {...register("email", { required: "User name is required" })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </Form.Field>
        {userError && (
          <div style={{ color: "red", marginBottom: "1em" }}>{userError}</div>
        )}
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default Login;
