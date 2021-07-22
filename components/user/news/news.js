import React, { Component } from 'react';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel'));
import config from '../../api/config';
import ItemNew from './itemNew';
import Index from './../index';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const News = ({ news }) => {
  return (
    <section className="section-lg bg-default" id="news" data-type="anchor">
      <div className="container wow-outer">
        <h3
          className="text-center wow slideInDown"
          style={{ visibility: 'visible', animationName: 'slideInDown' }}
        >
          Recent News
        </h3>
        {/* Owl Carousel*/}
        <div
          className="owl-carousel owl-theme  wow fadeInUp owl-loaded"
          data-items={1}
          data-md-items={2}
          data-lg-items={3}
          data-dots="true"
          data-nav="false"
          data-stage-padding="0px"
          data-loop="false"
          data-margin="15px"
          data-mouse-drag="false"
          style={{ visibility: 'visible', animationName: 'fadeInUp' }}
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: 'translate3d(0px, 0px, 0px)',
                transition: 'all 0s ease 0s',
                width: 3173,
              }}
            >
              {news.map((value, index) => (
                <ItemNew
                  key={index}
                  _time={value._time}
                  content={value.content}
                  title={value.title}
                ></ItemNew>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
