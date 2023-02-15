import { StyledHeaderLeft } from '../../app/assets/styledComponents';
import CreateStudyButton from './CreateStudyButton';
import LibraryButton from './LibraryButton';
import QuizletLogo from './QuizletLogo';

const HeaderLeft = () => {
  return (
    <StyledHeaderLeft>
      <QuizletLogo />
      <LibraryButton />
      <CreateStudyButton />
    </StyledHeaderLeft>
  );
};

export default HeaderLeft;
