import { } from "native-base";
import { Button, Text ,View, Image} from "react-native";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export const AuthContainer = styled(View)`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled(Text)`
  color: green;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: rgb(255, 182, 193);
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: green;
  margin-top: 30px;
`;

export const AuthButtonText = styled(Text)`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled(Text)`
  color: green;
  margin-top: 15px;
`;
export const SignOutButtonStyle = styled(Text)`
  margin: 0 0 10% 45%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

export const SignInButtonStyle = styled(Text)`
  margin: 10% 0 10% 40%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

export const SignButtonStyle = styled(Button)`
  margin: 6% 0 10% 34%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;
export const Signin = styled(View)`
  margin-top: 25%;
  margin-left: 14%;
  width: 70%;
  align-items: center;
`;
export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
`;
export const MessageBox= styled(Text)`
    background-color: #F48444;
          width: 50%;
          height: 50%;
          /* border-Radius: 5%; */
          /* position: unset; */
          padding: 5%;
          margin-Top: 2%;
          color: black;
`;
export const MessageImage= styled.Image`
  width: 300px;
 height: 300px;
/* border-Radius: 10%; */
margin-left: 55%;
padding: 1%;
`;
export const BkG= styled.ImageBackground`
 width: 100%;
      height: 100%;
      /* background-size: cover;
    object-fit: cover; */
`;
export const RoomBorder = styled(View)`
height:100%;
 width: 100%;
  position: absolute;
`;
export const RedBox = styled(View)`
border: 15px solid red;
          background-color: red;
          width: 100%;
`;
export const ProfileImage = styled(Image)`
position: absolute;
            width: 100px;
            height: 100px;
`;