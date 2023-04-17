import { List } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchStudySets } from '../../../app/api';
import CircularLoading from '../../common/CircularLoading';
import StudySet from '../../study-sets/StudySet';
import { useNavigate } from 'react-router-dom';

const StudySetTab = () => {
  const navigate = useNavigate();
  const [studySets, setStudySets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStudySets();
  }, []);

  const getStudySets = async () => {
    setLoading(true);
    const { success, data } = await fetchStudySets();
    if (success) setStudySets(data);
    setLoading(false);
  };

  return (
    <div>
      <List>
        {studySets.map((studySet, index) => (
          <StudySet
            key={index}
            type={3}
            studySet={studySet}
            onClick={() => navigate(`/study-set/${index}`)}
          />
        ))}
      </List>
      <CircularLoading loading={loading} mt={2} />
    </div>
  );
};

export default StudySetTab;
