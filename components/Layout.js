import Footer from './user/footer/footer';
import Navbar from './Navbar';
import Head from 'next/head';
import User from './user/index';
const Layout = ({ children }) => {
  return (
    <div>
      <User></User>
    </div>
  );
};

export default Layout;
