import { useEffect } from "react";
import "./App.css";
import Header from "./Common/Layout/NavBar/Header/Header";
import { Container } from "semantic-ui-react";
import httpMethod from "./Common/Utils/axiosSetup";
import { useDispatch } from "react-redux";
import { addActivity } from "./Store/ActivityStore";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./Models/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    httpMethod.get("/Activity/GetActivities", {}).then((res) => {
      res.map((x) => {
        dispatch(addActivity(x));
      });
    });
  }, []);

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <Header />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
