import React, { Component } from 'react';
import Image from 'next/image';
const Target = ({ targets }) => {
  return (
    <section
      className="section section-xxl bg-default"
      id="about"
      data-type="anchor"
    >
      <div className="container">
        <div className="row row-50 justify-content-center align-items-lg-center">
          <div className="col-lg-6 col-xl-5 wow-outer">
            <div className="wow slideInLeft">
              <Image
                src="/images/cotrang.PNG"
                alt="mr.Trang"
                width="471px"
                height="327px"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 wow-outer">
            <div className="wow slideInRight">
              <h3>{targets.title ? targets.title : 'some error '}</h3>
              <p>{targets.name ? targets.name : 'some error '}</p>
              <p>{targets.des ? targets.des : 'some error '}</p>
              <p>{targets.info ? targets.info : 'some error '}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
