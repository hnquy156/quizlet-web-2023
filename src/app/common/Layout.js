import { Outlet } from 'react-router-dom';
import Footer from '../../features/footer/Footer';
import Header from '../../features/header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
