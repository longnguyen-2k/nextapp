import React, { Component } from 'react';
import Image from 'next/image';

class footer extends Component {
  render() {
    return (
      <footer className="section footer-minimal context-dark">
        <div className="pix_section pix-padding-v-10">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-12">
                <h5 className="pix-black-gray-dark">
                  <a
                    href="https://www.passerellesnumeriques.org/cac-trung-tam/"
                    className="pix_edit_text"
                  >
                    <strong>CÁC TRUNG TÂM</strong>
                  </a>
                </h5>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/cac-trung-tam/campuchia"
                    className="pix-black-gray-light"
                  >
                    {' '}
                    <address className="pix_edit_text">Campuchia </address>
                  </a>
                </div>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/cac-trung-tam/philippines"
                    className="pix-black-gray-light"
                  >
                    {' '}
                    <address className="pix_edit_text">Philippines </address>
                  </a>
                </div>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/cac-trung-tam/vietnam"
                    className="pix-black-gray-light"
                  >
                    {' '}
                    <address className="pix_edit_text">Việt Nam </address>
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-xs-12">
                <h5 className="pix-black-gray-dark">
                  <a
                    href="https://www.passerellesnumeriques.org/cac-doi-tac"
                    className="pix_edit_text"
                  >
                    <strong>CÁC ĐỐI TÁC</strong>
                  </a>
                </h5>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/vi/cac-doi-tac/ho-da-ho-tro-chung-toi/"
                    className="pix-black-gray-light"
                  >
                    <span className="pix_edit_text">
                      Họ đã hỗ trợ chúng tôi
                    </span>
                  </a>
                </div>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/cac-doi-tac/hay-la-doi-tac-cua-pn"
                    className="pix-black-gray-light"
                  >
                    <span className="pix_edit_text">Hãy là đối tác của PN</span>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <h5 className="pix-black-gray-dark">
                  <a className="pix_edit_text">
                    <strong>CHÚNG TÔI</strong>
                  </a>
                </h5>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/gioi-thieu"
                    className="pix-black-gray-light"
                  >
                    <span className="pix_edit_text">Giới thiệu</span>
                  </a>
                </div>

                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/lien-he"
                    className="pix-black-gray-light"
                  >
                    <span className="pix_edit_text">Liên hệ</span>
                  </a>
                </div>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/tai-tro"
                    className="pix-black-gray-light"
                  >
                    <span className="pix_edit_text">Tài Trợ</span>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <h5 className="pix-black-gray-dark">
                  <span className="pix_edit_text">
                    <strong>KẾT NỐI</strong>
                  </span>
                </h5>
                <div className="pix-padding-v-10">
                  <a
                    href="https://www.passerellesnumeriques.org/tin-tuc"
                    className="pix-black-gray-light"
                  >
                    <span className="pix_edit_text">Tin tức</span>
                  </a>
                </div>
                <div className="pix-padding-v-10">
                  <ul className="share-buttons">
                    <li className="d-inline m-1">
                      <a
                        title="PN on Facebook"
                        href="https://www.facebook.com/passerelles.numeriques"
                      >
                        <Image
                          style={{ width: '27px' }}
                          src="images/Facebook.svg"
                        />
                      </a>
                    </li>
                    <li className="d-inline m-1 ">
                      <a
                        title="PN on Twitter"
                        href="https://twitter.com/passerellesnume"
                      >
                        <Image
                          style={{ width: '27px' }}
                          src="images/Twitter.svg"
                        />
                      </a>
                    </li>
                    <li className="d-inline m-1 ">
                      <a
                        title="PN on LinkedIn"
                        href="https://www.linkedin.com/company/455759"
                      >
                        <Image
                          style={{ width: '27px' }}
                          src="images/LinkedIn.svg"
                        />
                      </a>
                    </li>
                    <li className="d-inline m-1">
                      <a
                        title="PN on YouTube"
                        href="https://www.youtube.com/user/PasserellesNumerique"
                      >
                        <Image
                          style={{ width: '27px' }}
                          src="images/youtube.png"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
