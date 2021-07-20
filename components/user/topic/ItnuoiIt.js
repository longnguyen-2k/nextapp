import React, { Component } from 'react';
import Item_itnuoiit from './item_itnuoiit';
const ItnuoiIt = ({ itnuoiits }) => {
  return (
    <div>
      <section
        className="section section-lg bg-gray-1"
        id="ITNuoiIT"
        data-type="anchor"
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-9 col-lg-7 wow-outer">
              <div className="wow slideInDown">
                <h3>{itnuoiits[0].title ? itnuoiits[0].title : ''}</h3>
                <p>{itnuoiits[0].des ? itnuoiits[0].des : ''}</p>
              </div>
            </div>
          </div>
          <div className="row row-50">
            {itnuoiits
              ? itnuoiits.map((itnuoiit) => (
                  <Item_itnuoiit itnuoiit={itnuoiit}></Item_itnuoiit>
                ))
              : ''}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItnuoiIt;
