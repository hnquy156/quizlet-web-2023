import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useLazyGetUserInfoQuery } from '../../app/api';
import { STATUS_CODES } from '../../utils/constant';
import { setUserInfo } from '../../app/slices/user';

const Layout = () => {
  const navigate = useNavigate();
  const [fetchUserInfo] = useLazyGetUserInfoQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }

      const res = await fetchUserInfo().unwrap();
      dispatch(setUserInfo(res.data));
    } catch (error) {
      console.error('getUserInfo error:', error);
      if (error.status === STATUS_CODES.UNAUTHORIZED) {
        navigate('/login');
        localStorage.removeItem('token');
      }
    }
  };

  return (
    <Box>
      <Header />
      <Box mt={12}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
