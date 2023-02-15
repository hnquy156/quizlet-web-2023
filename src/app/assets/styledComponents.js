import { styled } from '@mui/material';

export const WrapHeader = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
}));

export const StyledHeaderLeft = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  height: 32,
  padding: 12,
}));

export const StyledLibraryButton = styled('div')(() => ({
  position: 'relative',
  width: 50,
  marginRight: 32,
}));

export const StyledLibraryTabs = styled('div')(() => ({
  position: 'absolute',
  width: 200,
  marginRight: 32,
  left: 0,
  top: '120%',
}));

export const StyledCreateButton = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: 32,
  // height: 16,
}));
