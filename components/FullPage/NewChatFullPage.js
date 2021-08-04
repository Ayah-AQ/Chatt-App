//components
import Room from "../ChatRoom/Room";
import CreateNewChat from "../ChatRoom/sideBarContact/CreateNewChat";
//styles
import { FullPageDiv } from "../../styles";

const NewChatFullPage = () => {
  return (
    <FullPageDiv>
      <CreateNewChat />
      {/* <Room /> */}
    </FullPageDiv>
  );
};
export default NewChatFullPage;
