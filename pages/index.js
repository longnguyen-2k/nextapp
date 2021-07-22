// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
import Header from '../Components/user/header/header';
import Footer from '../Components/user/footer/footer';
import Video from '../Components/user/topic/Admissions';
import News from '../Components/user/news/news';
import Partner from '../Components/user/partner/partners';
import Target from '../Components/user/topic/target';
import ItnuoiIt from '../Components/user/topic/ItnuoiIt';
import Formcontact from '../Components/user/footer/formcontact';
import Donate from '../Components/user/formDonate/donate';
import Body from '../Components/user/body/body';
import axios from 'axios';
import config from '../Components/api/config';
import Head from 'next/head';
import Script from 'next/script';

const callAPI = (endpoint) => {
  return axios.get(config.prefixUrl + endpoint).then((res) => res.data);
};
export const getStaticProps = async () => {
  const news = await callAPI('/news');
  const partners = await callAPI('/partners');
  const targets = await callAPI('/targets/1');
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
