import BGContainer from "../Components/BGContainer.jsx";
import Login from "../Components/Login.jsx";
import TouchKeybordContainer from "../Components/TouchKeybordContainer.jsx";

export default function LoginScreen() {
  return (
    <BGContainer>
      <TouchKeybordContainer keyboardVerticalOffset="-260">
        <Login />
      </TouchKeybordContainer>
    </BGContainer>
  );
}
