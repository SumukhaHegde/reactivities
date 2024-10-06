import { useEffect, useState } from "react";
import "./App.css";
import Activity from "./Models/Activities/types";
import Header from "./Common/Layout/NavBar/Header/Header";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "./Models/Activities/ActivityDashboard";
import httpMethod from "./Common/Utils/axiosSetup";
import { useDispatch } from "react-redux";
import { addActivity } from "./Store/ActivityStore";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    httpMethod.get("/Activity/GetActivities", {}).then((res) => {
      res.map((x) => {
        dispatch(addActivity(x));
      });
    });
  }, []);

  return (
    <>
      <Header />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default App;
