import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <Input
      id="outlined-start-adornment"
      sx={{ m: 1, width: '25ch' }}
      startAdornment={<SearchIcon />}
      placeholder="Search Study sets, folders, ..."
    />
  );
};

export default SearchBox;
