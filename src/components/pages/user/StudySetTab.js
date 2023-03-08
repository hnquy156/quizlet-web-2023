import { List } from '@mui/material';
import StudySet from '../../study-sets/StudySet';

const StudySetTab = () => {
  return (
    <div>
      <h1>Study Set Tabs </h1>
      <List>
        {Array.from(Array(5).keys()).map((item, index) => (
          <StudySet key={index} type={3} />
        ))}
      </List>
    </div>
  );
};

export default StudySetTab;
