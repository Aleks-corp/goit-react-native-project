import BGContainer from '../Components/BGContainer.jsx';
import Registration from '../Components/Registration.jsx';
import TochKeybordContainer from '../Components/TochKeybordContainer.jsx';

export default function RegistrationScreen() {
  return (
    <BGContainer>
      <TochKeybordContainer keyboardVerticalOffset="-200">
        <Registration />
      </TochKeybordContainer>
    </BGContainer>
  );
}
