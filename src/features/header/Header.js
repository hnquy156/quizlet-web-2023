import { WrapHeader } from '../../app/assets/styledComponents';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
  return (
    <WrapHeader>
      <HeaderLeft />
      <HeaderRight />
    </WrapHeader>
  );
};

export default Header;
