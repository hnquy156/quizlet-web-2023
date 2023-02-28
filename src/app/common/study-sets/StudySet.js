import StudySetType1 from './StudySetType1';
import StudySetType2 from './StudySetType2';

const StudySet = (props) => {
  let StudySetComponent = null;
  switch (props.type) {
    case 1:
      StudySetComponent = StudySetType1;
      break;
    case 2:
      StudySetComponent = StudySetType2;
      break;
    default:
      StudySetComponent = StudySetType1;
  }
  return <StudySetComponent {...props} />;
};

export default StudySet;
