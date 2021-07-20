import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'));
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item_partner from './item_partner';

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
        <OwlCarousel className=" owl-theme  wow fadeInUp owl-loaded dots-offset-lg owl-carousel-lg owl-loaded">
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
                return <Item_partner partner={partner}> </Item_partner>;
              })}
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Partner;
