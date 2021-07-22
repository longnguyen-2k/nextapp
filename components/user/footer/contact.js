import React, { useState } from 'react';
import { sendEmailContact } from '../../api/resource';
import Image from 'next/image';

const Contact = () => {
  let [form, setForm] = useState({});
  const onHandleForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submit = () => {
    sendEmailContact(form.email);
  };

  return (
    <div>
      <section
        className="parallax-container"
        data-parallax-img="images/parallax-img-2.jpg"
      >
        <div className="material-parallax parallax">
          <Image
            src="https://livedemo00.template-help.com/wt_prod-22894/images/parallax-img-2.jpg"
            alt
            style={{
              display: 'block',
              transform: 'translate3d(-50%, 343px, 0px)',
            }}
          />
        </div>
        <div className="parallax-content section-xxl context-dark text-center">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-9 col-lg-8 col-xl-8 wow-outer">
                <div className="innset-xl-right-30 innset-xl-left-30">
                  <div
                    className="wow slideInDown"
                    style={{
                      visibility: 'visible',
                      animationName: 'slideInDown',
                    }}
                  >
                    <h3>Subscribe to Stay Informed</h3>
                    <form
                      className="rd-form rd-mailform rd-form-inline"
                      data-form-output="form-output-global"
                      data-form-type="subscribe"
                      method="post"
                      noValidate="novalidate"
                    >
                      <div className="form-wrap">
                        <input
                          className="form-input form-control-has-validation"
                          id="subscribe-form-email"
                          type="email"
                          name="email"
                          onChange={onHandleForm}
                          data-constraints="@Email @Required"
                        />
                        <span className="form-validation" />
                        <label
                          className="form-label rd-input-label"
                          htmlFor="subscribe-form-email"
                        >
                          Your E-mail
                        </label>
                      </div>
                      <div className="form-button">
                        <button
                          className="button button-primary button-lg"
                          type="button"
                          onClick={submit}
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
