import React from 'react';

function Image_home({ srcImage }) {
  return (
    <div
      className="box-img-animate-item"
      data-parallax-scroll='{"y": 0, "x": 140,  "smoothness": 50 }'
    >
      <img src={srcImage.image} width="271px" alt="" />
    </div>
  );
}

export default Image_home;
