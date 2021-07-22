import React, { Component } from 'react';
import Image_home from './image_home';
const ourMissi = ({ srcImages }) => {
  let item = new Set();
  function getRandomItem() {
    for (let index = 0; index < srcImages.length; index++) {
      if (index > 5) break;
      const randomIndex = Math.floor(Math.random() * srcImages.length);
      const temp = srcImages[randomIndex];
      item.add(temp);
    }
    return item;
  }
  let srcImagesRandom = [...getRandomItem()];

  return (
    <section className="section section-xl" id="our-mission" data-type="anchor">
      <div className="container">
        <div className="row row-50 justify-content-lg-between align-items-lg-center">
          <div className="col-lg-6">
            <div className="box-img-animate">
              {srcImagesRandom
                ? srcImagesRandom.map((srcImage, index) => {
                    let x, y;
                    if (index == 0 || index == 4) {
                      x = 140;
                      y = 0;
                    }
                    if (index == 1) {
                      x = 0;
                      y = 150;
                    }
                    if (index == 2) {
                      x = 20;
                      y = 20;
                    }
                    if (index == 3) {
                      x = 70;
                      y = 60;
                    }
                    return (
                      <Image_home
                        key={index}
                        width="200px"
                        height="200px"
                        srcImage={srcImage}
                        x={x}
                        y={y}
                      ></Image_home>
                    );
                  })
                : ''}
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="innset-xl-left-70">
              <h3>Sứ mệnh</h3>
              <p>
                <font style={{ verticalAlign: 'inherit' }}>
                  <font style={{ verticalAlign: 'inherit' }}>
                    Passerelles numériques là một tổ chức phi lợi nhuận theo
                    luật của Pháp, được thành lập năm 2005, hoạt động tại 3 quốc
                    gia châu Á:{' '}
                  </font>
                </font>
                <a href="/our-actions/cambodia/">
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Campuchia</font>
                  </font>
                </a>
                <font style={{ verticalAlign: 'inherit' }}>
                  <font style={{ verticalAlign: 'inherit' }}> , </font>
                </font>
                <a href="/our-actions/philippines/">
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>
                      Philippines
                    </font>
                  </font>
                </a>
                <font style={{ verticalAlign: 'inherit' }}>
                  <font style={{ verticalAlign: 'inherit' }}> và </font>
                </font>
                <a href="/our-actions/vietnam/">
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Việt Nam</font>
                  </font>
                </a>
                <font style={{ verticalAlign: 'inherit' }}>
                  <font style={{ verticalAlign: 'inherit' }}>.</font>
                </font>
              </p>
              <div className="row row-50">
                <div className="col-md-6 col-lg-12">
                  <div className="box-icon-modern">
                    <div className="box-icon-inner decorate-triangle">
                      <span className="icon-xl linearicons-graduation-hat icon-primary" />
                    </div>
                    <div className="box-icon-caption">
                      <h4>
                        <a href="#">Giáo dục</a>
                      </h4>
                      <p>
                        Chúng tôi muốn tạo điều kiện cho các em có hoàn cảnh khó
                        khăn học tập và phát huy tối đa tiềm năng của mình.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="box-icon-modern">
                    <div className="box-icon-inner decorate-circle">
                      <span className="icon-xl linearicons-aim icon-primary" />
                    </div>
                    <div className="box-icon-caption">
                      <h4>
                        <a href="#">Công việc</a>
                      </h4>
                      <p>
                        Chúng tôi nổ lực để giúp các em có 1 công việc ổn định
                        trong tương lai.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="box-icon-modern">
                    <div className="box-icon-inner decorate-rectangle">
                      <span className="icon-xl linearicons-bag-dollar  icon-primary" />
                    </div>
                    <div className="box-icon-caption">
                      <h4>
                        <a href="#">Kinh tế</a>
                      </h4>
                      <p>
                        Chúng tôi muốn giúp các em và gia đình thoát khỏi đói
                        nghèo một cách bền vững, góp phần vào sự phát triển kinh
                        tế xã hội chung của đất nước.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourMissi;
