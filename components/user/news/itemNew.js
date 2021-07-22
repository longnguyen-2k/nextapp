import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';

function ItemNew(props) {
  if (props.content && props.content != 'undefined') {
    return (
      <div className="owl-item" style={{ width: '337.5px', marginRight: 15 }}>
        <div className="post-corporate">
          <a className="badge" href="#">
            {props._time}
          </a>
          <h4 className="post-corporate-title">
            <a href="#">{props.title}</a>
          </h4>
          <Image src="images/covid19.png" width={270} height={121} />
          <div className="post-corporate-text">
            <p>{parse(props.content)}</p>
          </div>
          <a
            className="post-corporate-link"
            href="https://www.passerellesnumeriques.org/en/2020/06/newsletter-covid-19-challenges-innovative-solutions/"
          >
            Read more
            <span className="icon linearicons-arrow-right" />
          </a>
        </div>
      </div>
    );
  } else {
    return '';
  }
}

export default ItemNew;
