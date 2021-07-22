import React from 'react';
import Image from 'next/image';

function Item_itnuoiit({ itnuoiit }) {
  return (
    <div className="col-md-6 col-lg-4 wow-outer">
      <div className="wow fadeInUp">
        <article className="box-causes">
          <div className="box-causes-img">
            <Image src={itnuoiit.image} alt="" width="372pxs" height="396px" />
            <a
              type="button"
              data-toggle="modal"
              data-target="#donateModel"
              href="#donate"
              className="button button-sm button-primary"
            >
              Donate
            </a>
          </div>
          <h4 className="font-weight-medium">
            <a href="#">{itnuoiit.name_topic}</a>
          </h4>
          <p className="box-causes-donate">
            <span className="box-causes-donate-complete">
              ${itnuoiit.amount}
            </span>{' '}
            of <span>1</span> a student
          </p>
        </article>
      </div>
    </div>
  );
}

export default Item_itnuoiit;
