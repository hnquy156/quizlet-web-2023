import { useRef, useState } from 'react';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import { StyledSearchInput } from '../../app/assets/styledComponents';

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setSearch('');
    setIsFocused(false);
  };

  const handleClose = () => {
    ref?.current?.focus();
  };

  return (
    <StyledSearchInput
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      startDecorator={<SearchIcon />}
      endDecorator={
        <CloseIcon
          onClick={handleClose}
          sx={{ display: !isFocused && 'none' }}
        />
      }
      value={search}
      onChange={handleChangeSearch}
      placeholder="Search Study sets, folders, ..."
    />
  );
};

export default SearchBox;
