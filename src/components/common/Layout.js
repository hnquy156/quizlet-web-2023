import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Layout = () => {
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
