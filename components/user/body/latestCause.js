import React, { Component } from 'react';
import Image from 'next/Image';
class latestCause extends Component {
  render() {
    return (
      <section
        className="section section-lg bg-gray-1"
        id="latest-causes"
        data-type="anchor"
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-9 col-lg-7 wow-outer">
              <div
                className="wow slideInDown"
                style={{ visibility: 'hidden', animationName: 'none' }}
              >
                <h3>Latest Causes</h3>
                <p>
                  At Sunrise, there are various charity causes and projects, in
                  which you can always take part. Feel free to learn about them
                  below or browse our website for more information.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-50">
            <div className="col-md-6 col-lg-4 wow-outer">
              <div
                className="wow fadeInUp"
                style={{ visibility: 'hidden', animationName: 'none' }}
              >
                <article className="box-causes">
                  <div className="box-causes-img">
                    <Image
                      src="images/causes-01-372x396.jpg"
                      alt=""
                      width={372}
                      height={396}
                    />
                    <a className="button button-sm button-primary" href="#">
                      Donate
                    </a>
                  </div>
                  <h4 className="font-weight-medium">
                    <a href="#">Recycling for Charity</a>
                  </h4>
                  <p className="box-causes-donate">
                    <span className="box-causes-donate-complete">$92,160</span>{' '}
                    of <span>$100,000</span> raised
                  </p>
                </article>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow-outer">
              <div
                className="wow fadeInUp"
                style={{ visibility: 'hidden', animationName: 'none' }}
              >
                <article className="box-causes">
                  <div className="box-causes-img">
                    <Image
                      src="images/causes-02-372x396.jpg"
                      alt=""
                      width={372}
                      height={396}
                    />
                    <a className="button button-sm button-primary" href="#">
                      Donate
                    </a>
                  </div>
                  <h4 className="font-weight-medium">
                    <a href="#">Clean Water For People</a>
                  </h4>
                  <p className="box-causes-donate">
                    <span className="box-causes-donate-complete">$52,380</span>{' '}
                    of <span>$55,000</span> raised
                  </p>
                </article>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow-outer">
              <div
                className="wow fadeInUp"
                style={{ visibility: 'hidden', animationName: 'none' }}
              >
                <article className="box-causes">
                  <div className="box-causes-img">
                    <Image
                      src="images/causes-03-372x396.jpg"
                      alt=""
                      width={372}
                      height={396}
                    />
                    <a className="button button-sm button-primary" href="#">
                      Donate
                    </a>
                  </div>
                  <h4 className="font-weight-medium">
                    <a href="#">Children’s Education</a>
                  </h4>
                  <p className="box-causes-donate">
                    <span className="box-causes-donate-complete">$42,280</span>{' '}
                    of <span>$45,000</span> raised
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default latestCause;
