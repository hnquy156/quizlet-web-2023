import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useLazyGetUserInfoQuery } from '../../app/api';
import { setUserInfo } from '../../app/slices/user';

const Layout = () => {
  const [fetchUserInfo] = useLazyGetUserInfoQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await fetchUserInfo().unwrap();
      dispatch(setUserInfo(res.data));
    } catch (error) {
      console.error('getUserInfo error:', error);
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
