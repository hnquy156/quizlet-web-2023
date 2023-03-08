import { StyledHeaderRight } from '../styles/styledComponents';
import SearchBox from './SearchBox';
import SettingButton from './SettingButton';

const HeaderRight = () => {
  return (
    <StyledHeaderRight>
      <SearchBox />
      <SettingButton />
    </StyledHeaderRight>
  );
};

export default HeaderRight;
