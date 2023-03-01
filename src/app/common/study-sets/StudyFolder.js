import StudyFolderType1 from './StudyFolderType1';
import StudyFolderType2 from './StudyFolderType2';

const StudyFolder = (props) => {
  let StudySetComponent = null;
  switch (props.type) {
    case 1:
      StudySetComponent = StudyFolderType1;
      break;
    case 2:
      StudySetComponent = StudyFolderType2;
      break;
    default:
      StudySetComponent = StudyFolderType1;
  }
  return <StudySetComponent {...props} />;
};

export default StudyFolder;
