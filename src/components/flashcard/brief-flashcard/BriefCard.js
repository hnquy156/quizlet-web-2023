import { Typography } from '@mui/material';
import { StyledBriefCard } from '../../styles/styledComponents';
import Actions from './Actions';

const BriefCard = () => {
  return (
    <StyledBriefCard
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Typography>This is Term</Typography>
      <Typography>Here is Definition</Typography>
      <Actions />
    </StyledBriefCard>
  );
};

export default BriefCard;
