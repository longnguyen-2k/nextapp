import React from 'react';
import Image from 'next/Image';
function Image_home({ srcImage, x, y }) {
  let parallax = `&quot;y&quot;:${y}, &quot;x&quot;: ${x},  &quot;smoothness&quot;: 50 }`;

  return (
    <div
      className="box-img-animate-item"
      data-parallax-scroll='{"y":0, "x": 140,  "smoothness": 50 }'
    >
      <Image
        src={srcImage.image}
        width="271px"
        height="271px"
        alt={srcImage.image}
      />
    </div>
  );
}

export default Image_home;
