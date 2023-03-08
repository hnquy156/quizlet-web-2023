import { WrapHeader } from '../styles/styledComponents';
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
