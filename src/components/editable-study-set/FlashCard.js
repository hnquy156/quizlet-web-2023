import { Box, Divider, IconButton, TextField, Typography } from '@mui/material';
import {
  DeleteOutline as DeleteIcon,
  DragHandle as DragHandleIcon,
} from '@mui/icons-material';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';

const FlashCard = ({
  index,
  term,
  definition,
  positionY,
  onDrop,
  ...props
}) => {
  const [zIndex, setZIndex] = useState(1);
  const [border, setBorder] = useState(null);
  const ref = useRef();

  const handleDrop = (event, data) => {
    setZIndex(1);
    onDrop(index, positionY + data.y);
    setBorder(null);
  };
  const handleStartDrag = () => {
    setZIndex(3);
    setBorder('1px solid blue');
  };

  return (
    <Draggable
      axis="y"
      handle=".handle"
      position={{ x: 0, y: 0 }}
      onStart={handleStartDrag}
      onStop={handleDrop}
      zIndex={zIndex}
      nodeRef={ref}
    >
      <Box
        {...props}
        bgcolor="#fff"
        borderRadius={2}
        p={2}
        paddingLeft={4}
        paddingRight={4}
        zIndex={zIndex}
        border={border}
        position="relative"
        ref={ref}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography>{index + 1}</Typography>
          <Box>
            <IconButton className="handle">
              <DragHandleIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          mt={2}
        >
          <TextField
            label="Enter term"
            variant="standard"
            sx={{ width: '50%', mr: 4 }}
            helperText="TERM"
            value={term}
          />
          <TextField
            label="Enter definition"
            variant="standard"
            sx={{ width: '50%' }}
            helperText="DEFINITION"
            value={definition}
          />
        </Box>
      </Box>
    </Draggable>
  );
};

export default FlashCard;
