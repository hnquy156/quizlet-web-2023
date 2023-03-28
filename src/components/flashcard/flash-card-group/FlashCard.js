import { useState } from 'react';
import { IconButton } from '@mui/material';
import { StyledFlashCard } from '../../styles/styledComponents';
import { Star as StarIcon } from '@mui/icons-material';

const FlashCard = ({ content, onClick, isActive }) => {
  const [activeStar, setActiveStar] = useState(isActive);
  const color = activeStar ? 'yellow' : null;

  const handleClickStar = (e) => {
    e.stopPropagation();
    setActiveStar(!activeStar);
  };

  return (
    <StyledFlashCard onClick={onClick}>
      <IconButton onClick={handleClickStar}>
        <StarIcon sx={{ color }} />
      </IconButton>
      <p>{content}</p>
    </StyledFlashCard>
  );
};

export default FlashCard;
