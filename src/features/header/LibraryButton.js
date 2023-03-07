import { Button } from '@mui/material';
import LibraryTabs from './LibraryTabs';
import { StyledLibraryButton } from '../../app/assets/styledComponents';
import { ExpandMore } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import useClickOutside from '../../app/utils/hooks/useClickOutside';

const LibraryButton = () => {
  const [isPopover, setIsPopover] = useState(false);
  const buttonRef = useRef(null);
  const tabsRef = useRef(null);

  const handlePopover = () => {
    setIsPopover(!isPopover);
  };

  const handleClosePopover = () => setIsPopover(false);

  const handleClickOutsideButton = (e) => {
    if (tabsRef?.current && !tabsRef.current?.contains(e.target)) {
      handleClosePopover();
    }
  };

  useClickOutside(buttonRef, handleClickOutsideButton, handlePopover);

  return (
    <StyledLibraryButton>
      <Button id="library-btn" variant="text" color="inherit" ref={buttonRef}>
        Your Library <ExpandMore />
      </Button>
      {isPopover && (
        <div ref={tabsRef}>
          <LibraryTabs onClose={handleClosePopover} />
        </div>
      )}
    </StyledLibraryButton>
  );
};

export default LibraryButton;
