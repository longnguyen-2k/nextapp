import Footer from './user/footer/footer';
import Navbar from './Navbar';
import Head from 'next/head';
import User from './user/index';
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next App ne</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <User></User>
    </div>
  );
};

export default Layout;
