import BGContainer from '../Components/BGContainer.jsx';
import Login from '../Components/Login.jsx';
import TochKeybordContainer from '../Components/TochKeybordContainer.jsx';

export default function LoginScreen() {
  return (
    <BGContainer>
      <TochKeybordContainer keyboardVerticalOffset="-260">
        <Login />
      </TochKeybordContainer>
    </BGContainer>
  );
}
