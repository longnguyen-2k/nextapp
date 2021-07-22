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
import GooglePayButton from '@google-pay/button-react';

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
