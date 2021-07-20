import axios from 'axios';
import config_momo from '../../../config';
import React, { useState, useEffect } from 'react';
import GooglePayButton from '@google-pay/button-react';
// import IconMomo from '../../../icon-momo.svg';
// import IconGoogle from '../../icon-google.svg';
import CryptoJS from 'crypto-js';

function Donate(props) {
  const [isActive, setActive] = useState([false, false, false, false]);
  let [QRcode, setQRcode] = useState();
  let [amount, setAmount] = useState(Number);
  let [form, setForm] = useState();
  const onHandleForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });

    console.log(form);
  };
  const creatForm = (data) => {
    let body = new FormData();
    for (const key in data) {
      body.append(key, data[key]);
    }
    return body;
  };
  const toggleClass = (index, ortherID = 1) => {
    //index ==4 tức là cái input orther amount
    if (index != 4) {
      document.getElementById('orther' + ortherID).value = '';
    }
    let temp = [...isActive];
    for (let index = 0; index < temp.length; index++) {
      temp[index] = false;
    }
    temp[index] = true;
    setActive(temp);
  };
  const ggPaySuccess = (amount) => {
    let url = 'http://localhost:8000/api/donations';
    axios.post(
      url,
      creatForm({
        amount: amount * 23000,
        link: form.email,
        name: form.firstName + form.lastName,
        info: form.message,
        donation_code: 'google pay',
      })
    );
  };

  const payWithMomoATM = (amount) => {
    let url = 'http://localhost:8000/api/momoATM';
    axios
      .post(
        url,
        creatForm({
          amount: amount * 23000,
          email: form.email,
          name: form.firstName + form.lastName,
          message: form.message,
        })
      )
      .then((res) => {
        window.location.assign(res.data.payUrl);
      });
  };
  let createSignature = (data, secretkey) => {
    return CryptoJS.HmacSHA256(data, secretkey);
  };

  const createUrlQR = (data) => {
    const url =
      'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' +
      encodeURIComponent(data);
    return url;
  };
  const createQR = (amount) => {
    setAmount(amount);
    let id = new Date().getMilliseconds();
    setQRcode(
      createUrlQR(
        `https://test-payment.momo.vn/pay/store/${config_momo.storeSlug}?a=${
          amount * 23000
        }&b=${id}&s=${createSignature(
          `storeSlug=${config_momo.storeSlug}&amount=${
            amount * 23000
          }&billId=${id}`,
          config_momo.secretkey
        )}`
      )
    );
  };
  useEffect(() => {
    let id = new Date().getMilliseconds();
    amount = amount > 10 ? amount : 10;
    setQRcode(
      createUrlQR(
        `https://test-payment.momo.vn/pay/store/${config_momo.storeSlug}?a=${
          amount * 23000
        }&b=${id}&s=${createSignature(
          `storeSlug=${config_momo.storeSlug}&amount=${
            amount * 23000
          }&billId=${id}`,
          config_momo.secretkey
        )}`
      )
    );
  }, {});

  return (
    <div className="container" id="google_pay">
      <div
        className="modal fade"
        id="donateModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="donateModel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header bg-orange">
              <h5 className="modal-title" id="donateModel">
                Donate
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
                  <div className="card card0">
                    <div className="row">
                      <div className="col-md-6 d-block p-0 box">
                        <div className="card rounded-0 border-0 card1 pr-xl-4 pr-lg-3">
                          <div className="row justify-content-center">
                            <div className="col-11">
                              <h3
                                className="text-center mt-4 mb-4"
                                id="heading0"
                              >
                                Donate now to Passerelles numériques
                              </h3>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-5 fit-image">
                              <img
                                src="https://i.imgur.com/NnVWuER.png"
                                height="200px"
                                width="200px"
                              />
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-11">
                              <h1
                                className="text-center mt-4 mb-0"
                                id="sub-heading1"
                              >
                                Give us
                              </h1>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-11">
                              <p
                                className="text-center mt-0 mb-3"
                                id="sub-heading2"
                              >
                                Your generous donation will sustain our work!
                              </p>
                            </div>
                          </div>
                          <form className="form-card p-4 pl-5">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-12">
                                    <label className="gift">First Name</label>
                                  </div>
                                  <div className="col-12">
                                    <input
                                      onChange={onHandleForm}
                                      className="gift-input"
                                      type="text"
                                      name="to"
                                      placeholder="FirstName"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-12">
                                    <label className="gift">Last Name</label>
                                  </div>
                                  <div className="col-12">
                                    <input
                                      onChange={onHandleForm}
                                      className="gift-input"
                                      type="text"
                                      name="from"
                                      placeholder="LastName"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <label className="gift">Recipient email</label>
                                <br />
                                <input
                                  onChange={onHandleForm}
                                  className="gift-input"
                                  type="email"
                                  name="email"
                                  placeholder="your@email"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <label className="gift">Message email</label>
                                <br />
                                <input
                                  onChange={onHandleForm}
                                  className="gift-input"
                                  type="text"
                                  name="message"
                                  placeholder="Contact message !"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 p-0 box">
                        <div className="card rounded-0 border-0 card2">
                          <div className="form-card">
                            <h2 id="heading" className="text-center">
                              Payment Information
                            </h2>
                            <ul
                              className="nav bg-light nav-pills rounded nav-fill mb-3"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  data-toggle="pill"
                                  href="#tab1"
                                >
                                  <i className="fa fa-credit-card" /> Google pay
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="pill"
                                  href="#tab2"
                                >
                                  <i className="fas fa-qrcode" /> Momo
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="pill"
                                  href="#tab3"
                                >
                                  <i className="fa fa-university" /> Bank
                                  Transfer
                                </a>
                              </li>
                            </ul>

                            <div className="tabbable">
                              <div className="tab-content">
                                <div
                                  className="tab-pane text-center active"
                                  id="tab1"
                                >
                                  <p>
                                    <br />
                                    <Input
                                      amount={amount}
                                      createQR={createQR}
                                      isActive={isActive}
                                      toggleClass={toggleClass}
                                      ortherID={1}
                                    />
                                    <p>
                                      $10 is the minimum online donation. All
                                      donations are tax deductible.
                                    </p>
                                    <img src="icon-google.svg" />
                                    <p className="mb-4">
                                      The safer, easier way to pay by Google Pay
                                    </p>
                                    <GooglePay
                                      amount={amount}
                                      ggPaySuccess={ggPaySuccess}
                                    />

                                    <div className="bottom">
                                      {/* <div className="row justify-content-center">
                                <div className="col-12">
                                  <h4 id="total" className="text-center">
                                    Total: $69.94 +{' '}
                                    <span className="text-dark">VAT</span>
                                  </h4>
                                </div>
                              </div> */}
                                      <div className="row justify-content-center">
                                        <div className="col-md-8">
                                          {/* <input
                                    type="submit"
                                    value="THANH TOAN"
                                    className="btn btn-success"
                                  /> */}
                                        </div>
                                      </div>
                                    </div>
                                  </p>
                                </div>
                                <div className="tab-pane text-center" id="tab2">
                                  <br />
                                  <Input
                                    amount={amount}
                                    createQR={createQR}
                                    isActive={isActive}
                                    toggleClass={toggleClass}
                                    ortherID={2}
                                  />
                                  <p>
                                    $10 is the minimum online donation. All
                                    donations are tax deductible.
                                  </p>
                                  {/* <hr /> Hoặc thanh toán bằng thẻ nội địa
                          <p />
                          <br />
                          <button
                            type="submit"
                            className="btn btn-success"
                            onClick={() => {
                              props.payWithMomoATM(props.amount);
                            }}
                          >
                            Donate
                          </button> */}
                                  <h2 className="mt-3">
                                    {' '}
                                    Scan QR Code To Donate Us{' '}
                                  </h2>
                                  <img
                                    className="mt-5"
                                    src={QRcode}
                                    alt="QR code"
                                  />
                                  <p className="mb-5"> QR code by MOMO</p>
                                  <br />
                                  <h5 className="font-weight-bolder mt-5">
                                    {' '}
                                    Step{' '}
                                  </h5>
                                  <div className="bottom mb-2">
                                    <div className="row justify-content-left">
                                      <div className="col-md-8" />
                                      <ul className="text-left">
                                        <li className="mt-3">
                                          1 Open Momo app, choose “Scan”
                                        </li>
                                        <li className="mt-3">
                                          2. Scan QR Code
                                        </li>
                                        <li className="mt-3">
                                          3. Check & Hit “Comfirm”
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-pane" id="tab3">
                                  <p>
                                    <br />
                                    <div className="text-center">
                                      <Input
                                        amount={amount}
                                        createQR={createQR}
                                        isActive={isActive}
                                        toggleClass={toggleClass}
                                        ortherID={3}
                                      />
                                      <p>
                                        $10 is the minimum online donation. All
                                        donations are tax deductible.
                                      </p>
                                      <img
                                        className="img-responsive mt-4"
                                        src="images/lien-ket-vi-momo.png"
                                        alt="momo banking"
                                      />
                                      <p className=" mb-4">
                                        The safer, easier way to pay by MOMO
                                      </p>

                                      <div className="bottom">
                                        <div className="row justify-content-center">
                                          <div className="col-md-8" />
                                        </div>
                                      </div>
                                    </div>
                                  </p>
                                  <h3 id="credit" className="mb-5">
                                    Credit card
                                  </h3>

                                  <div className="col-md-6 col-xs-12 col-sm-6 mb-5">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Card Number"
                                    />
                                  </div>
                                  <div className="col-md-6 col-xs-12 col-sm-6 mb-5">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="DD/MM/YY"
                                    />
                                  </div>
                                  <div className="col-md-6 col-xs-12 col-sm-6 mb-5">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="CVC"
                                    />
                                  </div>
                                  <div className="row form-group">
                                    <div className="col-12">
                                      <div className="custom-control custom-checkbox custom-control-inline">
                                        <input
                                          id="chk1"
                                          type="checkbox"
                                          name="chk"
                                          className="custom-control-input"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <input
                                    type="button"
                                    onClick={() => {
                                      payWithMomoATM(amount);
                                    }}
                                    value="Donate"
                                    className="btn btn-success"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="radio-group">
                              {/* code o day tiep */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const GooglePay = (props) => {
  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: props.amount ? props.amount.toString() : '15',
          currencyCode: 'USD',
          countryCode: 'US',
        },
        shippingAddressRequired: true,
        callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
      }}
      onLoadPaymentData={(paymentRequest) => {
        props.ggPaySuccess(props.amount);

        console.log('Success', paymentRequest);
      }}
      onPaymentAuthorized={(paymentData) => {
        console.log('Payment Authorised Success', paymentData);
        return { transactionState: 'SUCCESS' };
      }}
      onPaymentDataChanged={(paymentData) => {
        console.log('On Payment Data Changed', paymentData);
        return {};
      }}
      existingPaymentMethodRequired="false"
      buttonColor="black"
      buttonType="donate"
    />
  );
};

const Input = (props) => {
  return (
    <div className="text-center">
      <div className="btn-group ">
        <button
          className={
            props.isActive[0]
              ? ' btn btn-outline-info md-2 ms-2 active'
              : 'btn btn-outline-info m-2'
          }
          onClick={() => {
            props.createQR(15);
            props.toggleClass(0);
          }}
        >
          15 $
        </button>
        <button
          className={
            props.isActive[1]
              ? 'btn btn-outline-info m-2  active'
              : 'btn btn-outline-info m-2'
          }
          onClick={() => {
            props.createQR(45);
            props.toggleClass(1);
          }}
        >
          45 $
        </button>
        <button
          className={
            props.isActive[2]
              ? ' btn btn-outline-info m-2  active'
              : 'btn btn-outline-info m-2'
          }
          onClick={() => {
            props.createQR(75);
            props.toggleClass(2);
          }}
        >
          75 $
        </button>
        <button
          className={
            props.isActive[3]
              ? ' btn btn-outline-info m-2  active'
              : 'btn btn-outline-info m-2'
          }
          onClick={() => {
            props.createQR(100);
            props.toggleClass(3);
          }}
        >
          100 $
        </button>
      </div>
      <input
        id={'orther' + props.ortherID}
        type="number"
        min="10"
        max="10000"
        placeholder="Orther"
        className={
          props.isActive[4]
            ? ' btn btn-outline-info m-2  active'
            : 'btn btn-outline-info m-2'
        }
        onChange={() => {
          props.createQR(
            document.getElementById('orther' + props.ortherID).value
          );
          console.log(document.getElementById('orther' + props.ortherID).value);
        }}
        onClick={() => {
          props.createQR(
            document.getElementById('orther' + props.ortherID).value
          );

          props.toggleClass(4, props.ortherID);
        }}
      />
    </div>
  );
};

export default Donate;
