import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//styles
import Profilepic from "../../../Picture1.png";
import { BiArrowBack } from "react-icons/bi";
import {
  ProfileBGDiv,
  ProfilePicImg,
  ProfileUserDiv,
  ProfileUserH,
  ProfileBioH,
  SignOutBtn,
} from "../../../styles";
//components
import { signOut } from "../../../store/actions/authActions";
import { fetchProfiles } from "../../../store/actions/authActions";
import { useEffect } from "react";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.authReducer.user);
  const handleSignOut = () => dispatch(signOut(history));
  useEffect(() => {
    dispatch(fetchProfiles(users.id));
  }, []);

  return (
    <ProfileBGDiv>
      <Link to="/chats">
        <BiArrowBack
          style={{
            color: "red",
            height: "42px",
            width: "42px",
          }}
        />
      </Link>
      {!users.image ? (
        <ProfilePicImg source={Profilepic} />
      ) : (
        <ProfilePicImg source={users.image} alt={users.name} />
      )}

      <ProfileUserDiv className="container">
        {users && (
          <>
            <ProfileUserH>{users.username}</ProfileUserH>
          </>
        )}
      </ProfileUserDiv>
      <div className="container">
        <ProfileBioH>{users.bio}</ProfileBioH>
      </div>
      <Link to="/">
        <SignOutBtn
          type="button"
          className="btn btn-danger"
          onClick={handleSignOut}
        >
          Log Out
        </SignOutBtn>
      </Link>
    </ProfileBGDiv>
  );
};
export default ProfileSettings;
