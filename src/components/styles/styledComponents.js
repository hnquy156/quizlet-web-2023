import { styled, Card, IconButton } from '@mui/material';
import { Input } from '@mui/joy';
import { Link } from 'react-router-dom';
import { DEFAULT_BORDER } from './styleConstant';

export const WrapHeader = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: 64,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,
  border: DEFAULT_BORDER,
}));

export const StyledHeaderLeft = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  height: 48,
  padding: 12,
  alignItems: 'center',
}));

export const StyledLibraryButton = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: 'auto',
  marginRight: 20,
  marginLeft: 20,
}));

export const StyledLibraryTabs = styled(Card)(() => ({
  position: 'absolute',
  width: 400,
  marginRight: 32,
  left: 0,
  top: '120%',
  border: DEFAULT_BORDER,
  zIndex: 1,
  boxShadow: '0px 10px 15px 0px rgb(38, 57, 77)',
}));

export const StyledCreateButton = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  width: 'auto',
  height: 40,
}));

export const StyledCreateButtonCard = styled(Card)(() => ({
  position: 'absolute',
  width: 400,
  marginRight: 32,
  left: 0,
  top: '120%',
  border: DEFAULT_BORDER,
}));

export const StyledHeaderRight = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  height: 48,
  padding: 12,
  alignItems: 'center',
}));

export const StyledSearchInput = styled(Input)(() => ({
  m: 1,
  border: 0,
  bgcolor: '#f6f7fb',
  borderRadius: 50,
}));

export const WrapFooter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: 24,
  padding: '0 14px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  border: DEFAULT_BORDER,
}));

export const StyledLink = styled(Link)(() => ({
  color: '#1976d2',
  textDecoration: 'none',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: '#fff',
  border: DEFAULT_BORDER,
  marginLeft: 8,
}));

export const StyledFlashCard = styled(Card)(() => ({
  backgroundColor: '#fff',
  border: DEFAULT_BORDER,
  width: '100%',
  height: 200,
  position: 'relative',
  cursor: 'pointer',
  '& p': {
    fontSize: 28,
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '& button': {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 3,
  },
}));

export const StyledBriefCard = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: DEFAULT_BORDER,
  zIndex: 1,
  boxShadow: '0px 1px 1px 0px #d9dde8',
  marginBottom: 8,
  backgroundColor: 'white',
  padding: 15,
  borderRadius: 5,
}));
