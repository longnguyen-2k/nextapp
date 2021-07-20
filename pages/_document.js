import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/plugins/ua/ec.js"
          ></script>
          <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/analytics.js"
          ></script>
          <script
            type="text/javascript"
            async=""
            src="https://ssl.google-analytics.com/ga.js"
          ></script>
          <script src="apps/head/3ts2ksMwXvKRuG480KNifJ2_JNM.js"></script>
          <script src="apps/body/4o300efCt-CXoq1JEC-sVReFz48.js"></script>
          <link
            rel="icon"
            href="https://livedemo00.template-help.com/wt_prod-22894/images/favicon.png"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,500,600,700,800,900,900i%7CRoboto:400%7CRubik:100,400,700"
          />
          <link rel="stylesheet" href="css/bootstrap.css" />
          <link rel="stylesheet" href="css/fonts.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/style2.css" />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link href="css/style4.css" rel="stylesheet" />
          <link rel="stylesheet" href="css/style5.css" />
          <link rel="stylesheet" href="css/fontawesome-all.css" />
          <link rel="stylesheet" href="css/chartist.css" />
          <link rel="stylesheet" href="css/morris.css" />
          <link rel="stylesheet" href="css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="css/c3.css" />
          <link rel="stylesheet" href="css/flag-icon.min.css" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

          <link rel="stylesheet" href="css/payment.css" />
          <script src="js/script.js"></script>

          <link
            rel="stylesheet"
            href="data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gewogIGRpc3BsYXk6IGJsb2NrOwogIGJhY2tncm91bmQ6ICM0NTQ4NGQ7CiAgY29sb3I6ICNmZmY7CiAgbGluZS1oZWlnaHQ6IDEuNDU7CiAgcG9zaXRpb246IGZpeGVkOwogIHotaW5kZXg6IDkwMDAwMDAwOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIHBhZGRpbmc6IC41ZW0gMWVtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXVtkYXRhLXZpc2liaWxpdHk9ImhpZGRlbiJdIHsKICBkaXNwbGF5OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1tZXNzYWdlIHsKICBkaXNwbGF5OiBibG9jazsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gYSB7CiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CiAgY29sb3I6ICNlYmViZjQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6aG92ZXIsCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6YWN0aXZlIHsKICBjb2xvcjogI2RiZGJlYjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gY2xvdWRmbGFyZS1hcHAtY2xvc2UgewogIGRpc3BsYXk6IGJsb2NrOwogIGN1cnNvcjogcG9pbnRlcjsKICBmb250LXNpemU6IDEuNWVtOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICByaWdodDogLjRlbTsKICB0b3A6IC4zNWVtOwogIGhlaWdodDogMWVtOwogIHdpZHRoOiAxZW07CiAgbGluZS1oZWlnaHQ6IDE7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGNsb3VkZmxhcmUtYXBwLWNsb3NlOmFjdGl2ZSB7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1jbG9zZTpob3ZlciB7CiAgb3BhY2l0eTogLjllbTsKICBjb2xvcjogI2ZmZjsKfQo="
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
