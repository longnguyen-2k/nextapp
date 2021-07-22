import React from 'react';
import GooglePayButton from '@google-pay/button-react';
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
      }}
      onPaymentAuthorized={(paymentData) => {
        return { transactionState: 'SUCCESS' };
      }}
      onPaymentDataChanged={(paymentData) => {
        return {};
      }}
      existingPaymentMethodRequired={false}
      buttonColor="black"
      buttonType="donate"
      buttonSizeMode="fill"
    />
  );
};
export default GooglePay;
