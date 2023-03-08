import { Avatar, IconButton } from '@mui/material';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const SettingButton = () => {
  return (
    <IconButton>
      <Avatar alt="Logo" src={url} />
    </IconButton>
  );
};

export default SettingButton;
