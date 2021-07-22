import React from 'react';
import Image from 'next/image';

function Item_partner({ partner }) {
  return (
    <div className="owl-item" style={{ width: 330, marginRight: 30 }}>
      <a className="box-sponsor box-sponsor-modern wow-outer" href="#">
        <div
          className="wow fadeInUp"
          style={{
            visibility: 'visible',
            animationName: 'fadeInUp',
          }}
        >
          <a href={partner.link ? partner.link : '#'}></a>
          <Image
            src={partner.image ? partner.image : '#'}
            width={270}
            height={121}
          />
        </div>
      </a>
    </div>
  );
}

export default Item_partner;
