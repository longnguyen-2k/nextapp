// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
import Header from '../components/user/header/header';
import Footer from '../components/user/footer/footer';
import Video from '../components/user/topic/Admissions';
import News from '../components/user/news/news';
import Partner from '../components/user/partner/partners';
import Target from '../components/user/topic/target';
import ItnuoiIt from '../components/user/topic/ItnuoiIt';
import Formcontact from '../components/user/footer/formcontact';
import Donate from '../components/user/formDonate/donate';
import Body from '../components/user/body/body';
import axios from 'axios';
import config from '../components/api/config';
import Head from 'next/head';
import Script from 'next/script';

const callAPI = (endpoint) => {
  return axios.get(config.prefixUrl + endpoint).then((res) => res.data);
};
export const getStaticProps = async () => {
  const news = await callAPI('/news');
  const partners = await callAPI('/partners');
  const targets = await callAPI('/targets/2');
  const itnuoiits = await callAPI('/itnuoiit');
  const srcImages = await callAPI('/images');

  return {
    props: { news, partners, targets, itnuoiits, srcImages },
    revalidate: 60,
  };
};

export default function Index({
  news,
  partners,
  targets,
  itnuoiits,
  srcImages,
}) {
  return (
    <div>
      <Head>
        <title>Next App ne</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          type="text/javascript"
          async=""
          src="https://www.google-analytics.com/plugins/ua/ec.js"
        ></Script>
        <Script
          type="text/javascript"
          async=""
          src="https://www.google-analytics.com/analytics.js"
        ></Script>
        <Script
          type="text/javascript"
          async=""
          src="https://ssl.google-analytics.com/ga.js"
        ></Script>
        <Script src="apps/head/3ts2ksMwXvKRuG480KNifJ2_JNM.js"></Script>
        <Script src="apps/body/4o300efCt-CXoq1JEC-sVReFz48.js"></Script>
        <link
          rel="icon"
          href="https://livedemo00.template-help.com/wt_prod-22894/images/favicon.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,500,600,700,800,900,900i%7CRoboto:400%7CRubik:100,400,700"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <link
          rel="stylesheet"
          href="data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gewogIGRpc3BsYXk6IGJsb2NrOwogIGJhY2tncm91bmQ6ICM0NTQ4NGQ7CiAgY29sb3I6ICNmZmY7CiAgbGluZS1oZWlnaHQ6IDEuNDU7CiAgcG9zaXRpb246IGZpeGVkOwogIHotaW5kZXg6IDkwMDAwMDAwOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIHBhZGRpbmc6IC41ZW0gMWVtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXVtkYXRhLXZpc2liaWxpdHk9ImhpZGRlbiJdIHsKICBkaXNwbGF5OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1tZXNzYWdlIHsKICBkaXNwbGF5OiBibG9jazsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gYSB7CiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CiAgY29sb3I6ICNlYmViZjQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6aG92ZXIsCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6YWN0aXZlIHsKICBjb2xvcjogI2RiZGJlYjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gY2xvdWRmbGFyZS1hcHAtY2xvc2UgewogIGRpc3BsYXk6IGJsb2NrOwogIGN1cnNvcjogcG9pbnRlcjsKICBmb250LXNpemU6IDEuNWVtOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICByaWdodDogLjRlbTsKICB0b3A6IC4zNWVtOwogIGhlaWdodDogMWVtOwogIHdpZHRoOiAxZW07CiAgbGluZS1oZWlnaHQ6IDE7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGNsb3VkZmxhcmUtYXBwLWNsb3NlOmFjdGl2ZSB7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1jbG9zZTpob3ZlciB7CiAgb3BhY2l0eTogLjllbTsKICBjb2xvcjogI2ZmZjsKfQo="
        />

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></Script>

        <Script src="js/script.js"></Script>
      </Head>
      <Header />
      <Body srcImages={srcImages} />
      <Video></Video>
      <Donate />
      <ItnuoiIt itnuoiits={itnuoiits} />
      <Target targets={targets} />
      <News news={news} />
      <Partner partners={partners} />
      <Formcontact />
      <Footer />
    </div>
  );
}
