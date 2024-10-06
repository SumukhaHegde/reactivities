import { Button, Container, Menu } from "semantic-ui-react";
import Applogo from "../../../../../public/assests/Applogo.png";
import "./headerStyles.css";
import { useDispatch } from "react-redux";
import { openNewForm } from "../../../../Store/ActivityStore";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Menu className="h176" inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src={Applogo} alt="logo" style={{ marginRight: "10px" }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            onClick={() => {
              dispatch(openNewForm(true));
            }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
