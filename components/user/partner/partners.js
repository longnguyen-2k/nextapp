import React, { Component } from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item_partner from './item_partner';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Partner = ({ partners }) => {
  return (
    <section
      className="section-lg text-center"
      id="partners"
      data-type="anchor"
    >
      <div className="container">
        <div className="wow-outer">
          <div
            className="wow slideInDown"
            style={{ visibility: 'visible', animationName: 'slideInDown' }}
          >
            <h3>Partners</h3>
          </div>
        </div>

        {/* Owl Carousel*/}
        <div className="owl-carousel owl-theme  wow fadeInUp owl-loaded dots-offset-lg owl-carousel-lg owl-loaded">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: 'translate3d(0px, 0px, 0px)',
                transition: 'all 0s ease 0s',
                width: 2880,
              }}
            >
              {partners.map((partner, index) => {
                if (index > 10) return '';
                return (
                  <Item_partner key={index} partner={partner}>
                    {' '}
                  </Item_partner>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
