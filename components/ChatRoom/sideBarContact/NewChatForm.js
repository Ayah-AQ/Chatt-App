import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addChat, fetchChats } from "../../../store/actions/chatActions";
//styles
import { AddChatLabel, AddChatInp, AddChatBtn } from "../../../styles";

const NewChatForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [chat, setChat] = useState("");
  const handleChange = (event) =>
    setChat({ ...chat, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addChat(chat)).then((c) => dispatch(fetchChats()));
    dispatch(fetchChats());
    history.push("/chats");
  };
  return (
    <form>
      <div className="form-group" onSubmit={handleSubmit}>
        <AddChatLabel for="exampleInputEmail1">Add Contact</AddChatLabel>
        <AddChatInp
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter id"
          onChange={handleChange}
        />
      </div>
      <AddChatBtn type="submit" className="btn btn-danger">
        Add Contact
      </AddChatBtn>
    </form>
  );
};
export default NewChatForm;
