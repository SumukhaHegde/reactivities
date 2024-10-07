import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Grid,
  Image,
} from "semantic-ui-react";
import { useDispatch } from "react-redux";
import Activity from "../types";
import { viewActivity } from "../../../Store/ActivityStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import httpMethod from "../../../Common/Utils/axiosSetup";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSideBar from "./ActivityDetailSideBar";

const ActivityDetail = () => {
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const dispatch = useDispatch();
  const urlParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    httpMethod
      .get("/Activity/GetActivityByID", { params: { Id: urlParams.id } })
      .then((res) => {
        setActivity(res);
      });
  }, [activity]);
  return (
    activity && (
      <Grid>
        <Grid.Column width={10}>
          <ActivityDetailHeader activity={activity} />
          <ActivityDetailInfo activity={activity} />
          <ActivityDetailChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailSideBar />
        </Grid.Column>
      </Grid>
    )
  );
};

export default ActivityDetail;
