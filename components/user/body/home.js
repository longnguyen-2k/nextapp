import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
class Home extends Component {
  render() {
    return (
      <Carousel id="slider1" className="mt-1">
        <Carousel.Item interval={1000}>
          <section
            className="section section-lg section-main-bunner section-main-bunner-filter"
            id="home"
            data-type="anchor"
          >
            <div
              className="main-bunner-img"
              style={{
                backgroundImage: 'url("images/anh4.jpg")',
                backgroundSize: 'cover',
              }}
            />
            <div className="main-bunner-inner">
              <div className="container">
                <div className="row row-50 justify-content-lg-center align-items-lg-center">
                  <div className="col-lg-12">
                    <div className="bunner-content-modern text-center">
                      <h1 className="main-bunner-title">Chúng tôi là ai</h1>
                      <p>
                        Passerelles numériques nghĩa là “cây cầu công nghệ”, một
                        cách nói ẩn dụ của việc mang lại chương trình đào tạo
                        Công nghệ thông tin miễn phí cho các đối tượng thanh
                        niên yếu thế.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <section
            className="section section-lg section-main-bunner section-main-bunner-filter"
            id="home"
            data-type="anchor"
          >
            <div
              className="main-bunner-img"
              style={{
                backgroundImage: 'url("images/anh5.jpg")',
                backgroundSize: 'cover',
              }}
            />
            <div className="main-bunner-inner">
              <div className="container">
                <div className="row row-50 justify-content-lg-center align-items-lg-center">
                  <div className="col-lg-12">
                    <div className="bunner-content-modern text-center">
                      <h1 className="main-bunner-title">Chúng tôi đã làm gì</h1>
                      <p>
                        Từ năm 2010, Passerelles numériques Việt Nam (PNV) đã
                        xây được gần 500 “cây cầu”, đồng nghĩa với việc cung cấp
                        gần 500 chương trình đào tạo CNTT miễn phí cho 500 thanh
                        niên nghèo ở 7 tỉnh miền Trung Việt Nam với hơn 50% là
                        các em nữ. Các bạn sinh viên đã có cơ hội học tập tại Đà
                        Nẵng trong suốt 3 năm, với toàn bộ chi phí đào tạo, ăn
                        ở, và sinh hoạt được tài trợ bởi PNV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <section
            className="section section-lg section-main-bunner section-main-bunner-filter"
            id="home"
            data-type="anchor"
          >
            <div
              className="main-bunner-img"
              style={{
                backgroundImage: 'url("images/anh13.jpg")',
                backgroundSize: 'cover',
              }}
            />
            <div className="main-bunner-inner">
              <div className="container">
                <div className="row row-50 justify-content-lg-center align-items-lg-center">
                  <div className="col-lg-12">
                    <div className="bunner-content-modern text-center">
                      <h1 className="main-bunner-title">
                        Mục tiêu của Passerelles numériques
                      </h1>
                      <p>
                        Gây quỹ 70 triệu đồng mỗi tháng (tháng 6-tháng 12) từ
                        cộng đồng IT hảo tâm để trang trải các chi phí học CNTT
                        và chỗ ăn ở cho sinh viên PNV trong 7 tháng tới (Tổng
                        cộng: 500 triệu đồng đến hết năm 2021).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
