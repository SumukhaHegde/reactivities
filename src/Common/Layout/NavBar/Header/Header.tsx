import { Button, Container, Menu } from "semantic-ui-react";
import logo from "../../../../../public/assests/logo.png";
import "./headerStyles.css";
import { useDispatch } from "react-redux";
import { openNewForm } from "../../../../Store/ActivityStore";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateActivityButton = () => {
    dispatch(openNewForm(true));
    navigate("/createActivity");
  };
  return (
    <Menu className="h176" inverted fixed="top">
      <Container>
        <Menu.Item header as={Link} to="/">
          <img src={logo} alt="logo" style={{ marginRight: "10px" }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" as={Link} to="/activities" />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            onClick={() => {
              handleCreateActivityButton();
            }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
