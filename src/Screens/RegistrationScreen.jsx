import BGContainer from "../Components/BGContainer.jsx";
import Registration from "../Components/Registration.jsx";
import TouchKeybordContainer from "../Components/TouchKeybordContainer.jsx";

export default function RegistrationScreen() {
  return (
    <BGContainer>
      <TouchKeybordContainer keyboardVerticalOffset="-200">
        <Registration />
      </TouchKeybordContainer>
    </BGContainer>
  );
}
