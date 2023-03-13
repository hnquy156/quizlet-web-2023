import { ExpandMore, FilterNone, FolderOpen } from '@mui/icons-material';
import { Button, List, ListItemButton, Popover } from '@mui/material';
import { useId, useState } from 'react';
import { StyledCreateButton } from '../styles/styledComponents';
import { anchorOriginDefault } from '../../utils/constant';
import CreateFolderModal from './CreateFolderModal';

const CreateStudyButton = () => {
  const id = useId();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openFolderModal, setOpenFolderModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenCreatingFolderModal = () => {
    setOpenFolderModal(true);
    handleClose();
  };

  const handleCloseCreatingFolderModal = () => {
    setOpenFolderModal(false);
  };

  return (
    <StyledCreateButton>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Create
        <ExpandMore />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOriginDefault}
      >
        <List>
          <ListItemButton>
            <FilterNone sx={{ mr: 1 }} /> Study Set
          </ListItemButton>
          <ListItemButton onClick={handleOpenCreatingFolderModal}>
            <FolderOpen sx={{ mr: 1 }} /> Folder Set
          </ListItemButton>
        </List>
      </Popover>
      <CreateFolderModal
        open={openFolderModal}
        onClose={handleCloseCreatingFolderModal}
      />
    </StyledCreateButton>
  );
};

export default CreateStudyButton;
