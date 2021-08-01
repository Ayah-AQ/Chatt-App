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
color: red;
font-size: 40px;
margin-bottom: 20px;
border-bottom-color: rgb(255, 182, 193);
`;

export const AuthButton = styled.TouchableOpacity`
align-self: stretch;
align-items: center;
padding: 20px;
background-color: linear-gradient(
    180deg,
    rgba(249, 0, 0, 0.42) 32.38%,
    rgba(249, 0, 0, 0) 100%
  );;
margin-top: 90px;
`;

export const AuthButtonText = styled(Text)`
color: white;
font-weight: bold;
font-size: 19px;
`;

export const AuthOther = styled(Text)`
color: red;
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
color:black;
`;
export const MessageBox= styled.Text`
background-Color: #F48444;
width: 50%;
padding: 5%;
margin-top: 2%;
color: black;
top:-7px;
`;
export const MessageImage= styled.Image`
width: 300px;
height: 300px;
top: 3%;
`;
export const BkG= styled(ImageBackground)`
width: 100%;
height: 100%;
`;
export const RoomBorder = styled(View)`
height:100%;
width: 100%;
position: absolute;
`;
export const RedBox = styled(View)`
border: 10px solid red;
background-color: red;
width: 100%;
`;
export const SignupButton = styled(Button)`
margin-top:70px;
width: 250px;
align-content:center;
height:70px;
margin-left:25%;
margin-bottom:70px;

`;
export const SignInButton = styled(Button)`
margin-top:70px;
width: 250px;
align-content:center;
height:70px;
margin-top:40px;
margin-left:25%;
background:red;
`;
export const ChatName  = styled(Text)`
position: absolute;
margin-left:70%;
margin-top:40;
`;
export const ChatImage  = styled(Image)`
width: 90;
height: 90;
margin-top:14;
z-Index:1;
`;