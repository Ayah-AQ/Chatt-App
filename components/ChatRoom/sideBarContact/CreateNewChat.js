//styles
import { GrGroup } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  SideBMasterDiv,
  GroupIconDiv,
  PStyle,
  PlusIconDiv,
  P2Style,
  BGDiv,
  NewChattInp,
} from "../../../styles";

const CreateNewChat = () => {
  return (
    <BGDiv>
      <Link to="/chats">
        <BiArrowBack style={{ height: "40px", width: "40px", color: "red" }} />
      </Link>
      <SideBMasterDiv className="container">
        <GroupIconDiv type="button">
          <GrGroup
            style={{
              position: "absolute",
              width: "25px",
              height: "25px",
              left: "34%",
              right: "60%",
              top: " 13%",
              bottom: " 86%",
            }}
          />
          <PStyle>Create Group</PStyle>
        </GroupIconDiv>
        <Link to="/add-chat">
          <PlusIconDiv type="button">
            <MdAddCircleOutline
              style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                top: " 13%",
                color: "black",
                bottom: " 86%",
                marginBottom: "15px",
              }}
            />
            <P2Style>Add Chat</P2Style>
          </PlusIconDiv>
        </Link>
        <NewChattInp />
      </SideBMasterDiv>
    </BGDiv>
  );
};
export default CreateNewChat;
