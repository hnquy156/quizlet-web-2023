import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreateFolderModal = ({ open, onClose, onSubmit }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { value, id: key } = e.target;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleCreateFolder = () => {
    console.log('CreateFolder', data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true}>
      <DialogTitle fontSize={30}>
        Create a new folder{' '}
        {
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        }
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          value={data.title}
          label="Title"
          placeholder="Enter a title"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="description"
          value={data.description}
          label="Description (optional)"
          placeholder="Enter a description (optional)"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreateFolder}>Create folder</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFolderModal;
